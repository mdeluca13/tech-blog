// Login function
const login = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Login failed, please try again.');
        };
    };
};
  
// Signup function
const signup = async (event) => {
    console.log('click')
    
    event.preventDefault();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    
    if (username && password) {
        const response = await fetch('/api/user/signup', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to sign up.');
        }
      }
};

// Calling Login Function on Submit Click
document.querySelector('#login-btn').addEventListener('click', login);

// Calling Sign-up Function on Submit Click
document.querySelector('#signup-btn').addEventListener('click', signup);
  