// const withAuth = require('../../utils/auth');
const updateTitleEl = document.querySelector('#update-title');
const updateContentEl = document.querySelector('#update-content');

const newPost = async (event) => {
    event.preventDefault()
    let title = updateTitleEl.value.trim()
    let content = updateContentEl.value.trim()
    console.log(title)
    console.log(content)
    const response = await fetch('/api/post/', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
    });

    console.log('response:'+response)
  
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to post.');
    };
};

document.querySelector('#new-post').addEventListener('click', newPost);