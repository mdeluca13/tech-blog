// const withAuth = require('../../utils/auth');
const commentEl = document.querySelector('#comment');

const newComment = async () => {
    event.preventDefault()
    let comment = commentEl.value.trim()
    console.log('comment through js file' + comment)
    await fetch('/api/comment/', {
        method: 'POST',
        body: JSON.stringify({ comment }),
        headers: { 'Content-Type': 'application/json' },
    });
    document.location.reload();
};

document.querySelector('#comment-btn').addEventListener('click', newComment);