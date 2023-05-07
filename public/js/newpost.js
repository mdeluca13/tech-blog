// New Post function
const newPost = async function(event) {
    event.preventDefault();
    const titleEl = document.querySelector('#title');
    const contentEl = document.querySelector('#content');
    
    let title = titleEl.value.trim()
    let content = contentEl.value.trim()
    console.log(title)
    console.log(content)
    await fetch('/api/post/', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.replace('/dashboard');
};

// Calling new post function on click
document.querySelector('#new-post').addEventListener('click', newPost);