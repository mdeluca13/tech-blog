// const withAuth = require('../../utils/auth');
const commentEl = document.querySelector('#comment');

const newComment = async () => {
    event.preventDefault()
    let comment = commentEl.value.trim()
    console.log('comment through js file' + comment)
    const response = await fetch('/api/comment/', {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: { 'Content-Type': 'application/json' },
    });

    console.log('response through js file' + response)
  
    if (response.ok) {
        document.location.reload();
    } else {
        alert('Failed to comment.');
    };
};

document.querySelector('#comment-btn').addEventListener('click', newComment);