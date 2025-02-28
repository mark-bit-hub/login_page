function showRegister() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('welcomeContainer').style.display = 'none';
}

function showLogin() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('welcomeContainer').style.display = 'none';
}

function showWelcomePage() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('welcomeContainer').style.display = 'block';
}

// Change button color when user details are entered
document.getElementById('registerUsername').addEventListener('input', function() {
    const registerButton = document.getElementById('registerButton');
    if (this.value && document.getElementById('registerPassword').value && document.getElementById('confirmPassword').value) {
        registerButton.style.backgroundColor = '#007bff';
    } else {
        registerButton.style.backgroundColor = '#ccc';
    }
});

document.getElementById('registerPassword').addEventListener('input', function() {
    const registerButton = document.getElementById('registerButton');
    if (this.value && document.getElementById('registerUsername').value && document.getElementById('confirmPassword').value) {
        registerButton.style.backgroundColor = '#007bff';
    } else {
        registerButton.style.backgroundColor = '#ccc';
    }
});

document.getElementById('confirmPassword').addEventListener('input', function() {
    const registerButton = document.getElementById('registerButton');
    if (this.value && document.getElementById('registerUsername').value && document.getElementById('registerPassword').value) {
        registerButton.style.backgroundColor = '#007bff';
    } else {
        registerButton.style.backgroundColor = '#ccc';
    }
});

document.getElementById('loginUsername').addEventListener('input', function() {
    const loginButton = document.getElementById('loginButton');
    if (this.value && document.getElementById('loginPassword').value) {
        loginButton.style.backgroundColor = '#007bff';
    } else {
        loginButton.style.backgroundColor = '#ccc';
    }
});

document.getElementById('loginPassword').addEventListener('input', function() {
    const loginButton = document.getElementById('loginButton');
    if (this.value && document.getElementById('loginUsername').value) {
        loginButton.style.backgroundColor = '#007bff';
    } else {
        loginButton.style.backgroundColor = '#ccc';
    }
});

// Register User
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    fetch('http://localhost:3000/register',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Registration Successful");
            showLogin(); // Redirect to login page
        } else {
            alert("Registration Failed: " + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("An error occurred during registration.");
    });
});

// Login User
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            showWelcomePage(); // Redirect to welcome page
        } else {
            alert("Login Failed: " + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("An error occurred during login.");
    });
});

// Emotional Intelligence Quotes
const quotes = [
    "The ability to pause before acting is fundamental to emotional intelligence.",
    "Emotional intelligence is your ability to recognize and understand emotions in yourself and others, and your ability to use this awareness to manage your behavior and relationships.",
    "Knowing your own emotions is the key to emotional intelligence.",
    "Emotional awareness is the foundation of all the emotional intelligence skills.",
    "When dealing with people, remember you are not dealing with creatures of logic, but creatures of emotion.",
    "Emotional intelligence is a way of recognizing, understanding, and choosing how we think, feel, and act. It shapes our interactions with ourselves and others."
];

let currentQuoteIndex = 0;

function displayQuote() {
    document.getElementById('quoteText').textContent = quotes[currentQuoteIndex];
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
}

displayQuote(); // Display the first quote
setInterval(displayQuote, 5000); // Change quote every 5 seconds