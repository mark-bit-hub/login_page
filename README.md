Project Title: Mental Wellness Hub - User Authentication and Data Storage

Description:

This project is a dynamic web application that allows users to register, log in, and submit forms that store data in a MySQL database. It implements client-side validation using JavaScript and secure authentication mechanisms, including password hashing and session management.

Technologies Used:

Frontend:
HTML5
CSS3
JavaScript
Backend:
Node.js
Express.js
MySQL
bcrypt (or crypto)
cors
cookie-parser
dotenv
Database:
MySQL
Setup and Installation:

Prerequisites:
Node.js and npm (Node Package Manager) installed.
MySQL server installed and running.
Git installed.
Clone the Repository:
Clone the repository from GitHub to your local machine:
Bash

git clone <repository_url>
cd <repository_directory>
Install Backend Dependencies:
Navigate to the project directory in your terminal.
Install the required Node.js packages:
Bash

npm install express mysql body-parser cookie-parser cors crypto dotenv
Database Setup:
Create a MySQL database named mental_wellness (or as specified in your .env file).
Create the users table:
SQL

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
Environment Variables:
Create a .env file in the root directory of your project.
Add your MySQL database credentials:
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=mental_wellness
Replace the place holder values with your own values.
Run the Backend Server:
Start the Node.js server:
Bash

node server.js
The server will start running on http://localhost:3000.
Open the Frontend:
Open the login_page/index.html file in your web browser.
Code Structure:

server.js:
Contains the Node.js/Express.js backend code.
Sets up the MySQL database connection.
Handles user registration and login routes.
Uses bcrypt (or crypto) for password hashing.
Uses cors for cross origin resource sharing.
Serves the static files.
login_page/index.html:
The main HTML file for the login and registration page.
login_page/script.js:
Contains the JavaScript code for client-side validation and handling form submissions.
Uses the fetch API to communicate with the backend.
login_page/style.css:
Contains the styling for the web page.
.env:
Contains the environmental variables for the database connections.
Key Features:

User Registration:
Allows users to create new accounts.
Hashes passwords using SHA-256 (or bcrypt) for security.
Stores user data in the MySQL database.
User Login:
Authenticates users based on their username and password.
Compares the hashed password from the database with the provided password.
Uses cookies for session management.
Client-Side Validation:
Validates user input using JavaScript.
Provides real-time feedback to users.
Secure Authentication:
Uses password hashing to protect user credentials.
Uses cookies to store session information.
Emotional Intelligence Quotes:
Displays a rotation of emotional intelligence quotes.
How to Use:

Registration:
Open the application in your browser.
Click the "Register" link.
Enter your username and password.
Click the "Register" button.
Login:
Enter your username and password.
Click the "Login" button.
Deployment:

Hosting: You can deploy this application to platforms like Heroku, AWS, or Google Cloud.
Database: Ensure your MySQL database is accessible to your deployed application.
Environment Variables: Configure environment variables on your hosting platform.
HTTPS: Use HTTPS for secure communication.
Contributing:

Fork the repository.
Create a new branch for your feature or bug fix.
Submit a pull request.

DEBUGGING 
Debugging and Troubleshooting:

1. Common Errors and Solutions:

net::ERR_CONNECTION_REFUSED (Frontend):
Cause: The backend server is not running, or the port is incorrect.
Solution:
Verify that the Node.js server is running (node server.js).
Check the port number in your fetch requests and ensure it matches the server's port.
Temporarily disable firewalls.
404 (Not Found) (Frontend):
Cause: The requested route (e.g., /register, /login) is not defined in the backend.
Solution:
Check your server.js file and ensure the route is defined using app.post('/register', ...) or app.post('/login', ...).
Verify the URL in your fetch requests.
SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON (Frontend):
Cause: The server is sending an HTML error page (e.g., 404) instead of JSON, and the frontend is trying to parse it as JSON.
Solution:
Fix the underlying issue causing the HTML response (e.g., incorrect route).
Add error handling to your javascript fetch requests to check if the response is ok, before attempting to parse the response as json.
Error connecting to MySQL: ... (Backend):
Cause: Incorrect MySQL credentials or database connection issues.
Solution:
Verify the database credentials in your .env file.
Ensure the MySQL server is running.
Make sure the database exists.
Error inserting user: ... (Backend):
Cause: Duplicate username or other database errors.
Solution:
Check the error message for details.
Implement proper error handling in your database queries.
Make sure the users table exists.
TypeError: Failed to fetch (Frontend):
Cause: This is a very general error, and can be caused by many things.
Solution:
Check the network tab of your browser's developer tools.
Check the console of your browser's developer tools.
Check the console of your backend server.
Make sure the backend server is running.
Make sure the url in the fetch request is correct.
Make sure that CORS is enabled on the backend.
2. Debugging Tools and Techniques:

Browser Developer Tools:
Use the "Network" tab to inspect network requests and responses.
Use the "Console" tab to view JavaScript errors and log messages.
Use the "Sources" tab to set breakpoints and step through JavaScript code.
Node.js Debugger:
Use console.log() statements to output variables and track code execution.
Use the Node.js debugger (e.g., node inspect server.js) for more advanced debugging.
Use an IDE that has a built in debugger.
MySQL Client:
Use a MySQL client (e.g., MySQL Workbench, phpMyAdmin) to inspect the database and run SQL queries.
Error Logging:
Implement proper error logging in your backend code to capture and record errors.
Use try catch blocks.
Testing:
Write unit tests and integration tests to catch errors early.
Test all of your routes.
Isolate the Problem:
When an error occurs, try to isolate the problem by simplifying the code or testing individual components.
Test your backend routes with a tool like postman.
Test your front end fetch requests by making very simple get requests to your backend.
3. Debugging Workflow:

Identify the Error:
Note the error message and where it occurs.
Reproduce the Error:
Try to reproduce the error consistently.
Isolate the Cause:
Use debugging tools and techniques to narrow down the source of the error.
Fix the Error:
Modify the code to correct the error.
Test the Fix:
Verify that the error is resolved and that no new errors have been introduced.
Document the Fix:
Add comments to your code or update your documentation to explain the fix.
4. Tips for Effective Debugging:

Read Error Messages Carefully: Error messages often provide valuable clues about the problem.
Use Version Control: Commit your code regularly so you can easily revert to previous versions.
Break Down Complex Problems: Divide complex problems into smaller, more manageable tasks.
Ask for Help: Don't hesitate to ask for help from other developers or online resources.
Take Breaks: Sometimes, stepping away from the code can help you see the problem from a fresh perspective.
