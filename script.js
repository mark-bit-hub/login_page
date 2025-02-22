function showRegister() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

function showLogin() {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert("Registration Successful (Simulated)");
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Login Successful (Simulated)");
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