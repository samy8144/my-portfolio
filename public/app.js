// API Base URL - will use relative paths for Vercel deployment
const API_BASE = window.location.hostname === 'localhost' ? 'http://localhost:3001' : '';

// Tab switching functionality
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetTab = tab.getAttribute('data-tab');

        // Update active tab
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Update active content
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(`${targetTab}Tab`).classList.add('active');

        // Clear messages when switching tabs
        clearMessage();
    });
});

// Message display functions
function showMessage(message, type) {
    const messageContainer = document.getElementById('messageContainer');
    messageContainer.innerHTML = `
        <div class="message ${type}">
            ${message}
        </div>
    `;
}

function clearMessage() {
    const messageContainer = document.getElementById('messageContainer');
    messageContainer.innerHTML = '';
}

// Login form handler
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearMessage();

    const loginBtn = document.getElementById('loginBtn');
    loginBtn.disabled = true;
    loginBtn.textContent = 'Logging in...';

    const formData = {
        email: document.getElementById('loginEmail').value.trim(),
        password: document.getElementById('loginPassword').value
    };

    try {
        const response = await fetch(`${API_BASE}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.ok && data.success) {
            // Store token and user data
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));

            showMessage(data.message, 'success');

            // Redirect to portfolio page
            setTimeout(() => {
                window.location.href = 'portfolio.html';
            }, 1000);
        } else {
            showMessage(data.error || 'Login failed', 'error');
            loginBtn.disabled = false;
            loginBtn.textContent = 'Login';
        }
    } catch (error) {
        console.error('Login error:', error);
        showMessage(`Network error: ${error.message}. Please check your connection.`, 'error');
        loginBtn.disabled = false;
        loginBtn.textContent = 'Login';
    }
});

// Register form handler
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearMessage();

    const registerBtn = document.getElementById('registerBtn');
    registerBtn.disabled = true;
    registerBtn.textContent = 'Registering...';

    const formData = {
        name: document.getElementById('registerName').value.trim(),
        email: document.getElementById('registerEmail').value.trim(),
        password: document.getElementById('registerPassword').value
    };

    // Client-side validation
    if (formData.password.length < 6) {
        showMessage('Password must be at least 6 characters', 'error');
        registerBtn.disabled = false;
        registerBtn.textContent = 'Register';
        return;
    }

    try {
        const response = await fetch(`${API_BASE}/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const responseText = await response.text();
        console.log('Server response:', responseText);

        let data;
        try {
            data = JSON.parse(responseText);
        } catch (e) {
            console.error('JSON Parse Error:', e);
            throw new Error(`Server returned non-JSON response: ${responseText.substring(0, 100)}`);
        }

        if (response.ok && data.success) {
            showMessage(data.message, 'success');

            // Clear form
            registerForm.reset();

            // Switch to login tab after 2 seconds
            setTimeout(() => {
                document.querySelector('.tab[data-tab="login"]').click();
            }, 2000);
        } else {
            showMessage(data.error || 'Registration failed', 'error');
        }
    } catch (error) {
        console.error('Registration error:', error);
        showMessage(`Network error: ${error.message}. Please check your connection.`, 'error');
    } finally {
        registerBtn.disabled = false;
        registerBtn.textContent = 'Register';
    }
});

// Check if user is already logged in
if (localStorage.getItem('token')) {
    window.location.href = 'portfolio.html';
}
