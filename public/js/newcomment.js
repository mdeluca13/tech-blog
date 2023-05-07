// New comment function
const commentEl = document.querySelector('#comment');

const newComment = async (event) => {
    event.preventDefault();
    let comment = commentEl.value.trim();
    let post_id = document.querySelector('.comment-post-id');
    post_id = post_id.value;
    await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ comment, post_id }),
        headers: { 'Content-Type': 'application/json' },
    });
    document.location.reload();
};

// Calling new comment function on click
document.querySelector('#comment-btn').addEventListener('click', newComment);