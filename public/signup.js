document.addEventListener('DOMContentLoaded', function () {
  const signupForm = document.getElementById('signupForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');

  signupForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const username = usernameInput.value;
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;

      if (password !== confirmPassword) {
          alert('Password and confirm password do not match');
          return;
      }

      try {
          const response = await fetch('/register', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username, password }),
          });

          if (response.status === 200) {
              alert('Registration successful!');
          } else {
              alert('Registration failed. Please try again.');
              console.log(response);
          }
      } catch (error) {
          console.error('Error:', error);
          alert('An error occurred. Please try again later.');
          console.log(error);
      }
  });
});
