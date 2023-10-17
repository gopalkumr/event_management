document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const registerInput = document.getElementById('register');
    const passwordInput = document.getElementById('password');
    const loginStatus = document.getElementById('loginStatus');

    loginForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const register = registerInput.value;
        const password = passwordInput.value;

        // Simulate a login request (replace this with actual AJAX/Fetch request)
        // You can send the data to the server for authentication.
        // For example, using the Fetch API:
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ register, password }),
            });

            if (response.status === 200) {
                loginStatus.textContent = 'Login successful!';
                window.location.href = '/events.html';
            } else {
                loginStatus.textContent = 'Login failed. Please try again.';
            }
        } catch (error) {
            console.error('Error:', error);
            loginStatus.textContent = 'An error occurred. Please try again later.';
        }
    });
});
