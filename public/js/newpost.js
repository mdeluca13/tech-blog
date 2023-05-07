const titleEl = document.querySelector('#title');
const contentEl = document.querySelector('#content');

const newPost = async () => {
    event.preventDefault()
    let title = titleEl.value.trim()
    let content = contentEl.value.trim()
    console.log(title)
    console.log(content)
    const response = await fetch('/api/post/', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
    });

    console.log('response:'+response)
  
    // if (response.ok) {
    //     document.location.replace('/');
    // } else {
    //     alert('Failed to post.');
    // };
};

document.querySelector('#new-post').addEventListener('click', newPost);