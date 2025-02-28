require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors'); // Add CORS support
const crypto = require('crypto'); // Use crypto for SHA-256 hashing
const path = require('path'); // Add path module
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(cookieParser()); // Parse cookies
app.use(cors()); // Enable CORS for all routes

// MySQL Database Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Beracahone7245&',
    database: process.env.DB_NAME || 'mental_wellness'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('MySQL Connected...');
});

// Helper function to hash passwords using SHA-256
function hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
}

// Register User
app.post('/register', (req, res) => { // Correct route
    const { username, password } = req.body;

    // Check if username and password are provided
    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Username and password are required' });
    }

    // Hash the password using SHA-256
    const hashedPassword = hashPassword(password);

    // Insert user into the database
    const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(sql, [username, hashedPassword], (err, result) => {
        if (err) {
            console.error('Error inserting user:', err);
            return res.status(500).json({ success: false, message: 'Username already exists' });
        }
        console.log('User registered:', username);
        res.json({ success: true });
    });
});

// Login User
app.post('/login', (req, res) => { // Correct route
    const { username, password } = req.body;

    // Check if username and password are provided
    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Username and password are required' });
    }

    // Find the user in the database
    const sql = 'SELECT * FROM users WHERE username = ?';
    db.query(sql, [username], (err, result) => {
        if (err) {
            console.error('Error during login:', err);
            return res.status(500).json({ success: false, message: 'An error occurred' });
        }

        // Check if the user exists
        if (result.length > 0) {
            const user = result[0];

            // Hash the provided password and compare it with the stored hash
            const hashedPassword = hashPassword(password);
            if (hashedPassword === user.password) {
                // Set a cookie with the user ID
                res.cookie('userId', user.id, { httpOnly: true });
                return res.json({ success: true });
            }
        }

        // If the username or password is incorrect
        res.status(401).json({ success: false, message: 'Invalid username or password' });
    });
});

// Serve static files (HTML, CSS, JS) from the "login_page" folder
app.use(express.static(path.join(__dirname, 'login_page')));

// Serve index.html for all routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'login_page', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});