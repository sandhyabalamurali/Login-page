document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');

    // Registration Form Validation
    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            const username = document.querySelector('input[name="username"]').value;
            const email = document.querySelector('input[name="email"]').value;
            const password = document.querySelector('input[name="password"]').value;

            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                event.preventDefault();
            } else if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                event.preventDefault();
            } else if (username.trim() === '') {
                alert('Username cannot be empty.');
                event.preventDefault();
            }
        });
    }

    // Login Form Validation
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            const email = document.querySelector('input[name="email"]').value;
            const password = document.querySelector('input[name="password"]').value;

            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                event.preventDefault();
            } else if (password === '') {
                alert('Password cannot be empty.');
                event.preventDefault();
            }else if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                event.preventDefault();
            }    

        });
    }

    // Email validation regex
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }
});
