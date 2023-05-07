const withAuth = require('../../utils/auth');
// Logout function
const logout = async () => {
    const response = await fetch('api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to log out.');
    };
};

// Calling Logout Function on Submit Click
document.querySelector('#logout').addEventListener('click', logout);