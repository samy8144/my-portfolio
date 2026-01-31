// API Base URL
const API_BASE = window.location.hostname === 'localhost' ? 'http://localhost:3001' : '';

// Check authentication on page load
function checkAuth() {
    // ... (rest of checkAuth remains)
}

// Display user information
function displayUserInfo(user) {
    // Static profile info (Samata) remains unchanged
    // Dynamic welcome message for logged-in user
    const welcomeMsg = document.getElementById('welcomeMsg');
    const name = user.name || user.email.split('@')[0];
    // Capitalize first letter
    const displayName = name.charAt(0).toUpperCase() + name.slice(1);

    welcomeMsg.textContent = `Welcome, ${displayName}`;

    console.log('User logged in:', user.email);
}

// Logout functionality
const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', () => {
    // Clear local storage
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // Redirect to landing page
    window.location.href = 'index.html';
});

// Run authentication check
checkAuth();
