// API Base URL
const API_BASE = window.location.hostname === 'localhost' ? 'http://localhost:3001' : '';

// Check authentication on page load
function checkAuth() {
    // ... (rest of checkAuth remains)
}

// Display user information - Disabled to keep static portfolio info
function displayUserInfo(user) {
    // const userName = document.getElementById('userName');
    // const userEmail = document.getElementById('userEmail');

    // userName.textContent = user.name || user.email.split('@')[0];
    // userEmail.textContent = user.email;
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
