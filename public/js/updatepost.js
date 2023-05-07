const updateTitleEl = document.querySelector('#update-title');
const updateContentEl = document.querySelector('#update-content');

const updatePost = async (event) => {
    console.log('click')
    event.preventDefault()
    let postID = document.querySelector('.post-id');
    postID = postID.value;
    let title = updateTitleEl.value.trim()
    let content = updateContentEl.value.trim()
    console.log(title)
    console.log(content)
    const response = await fetch('/api/post/' + postID, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
    });

    console.log('response:'+response)
  
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to update post.');
    };
};

document.querySelector('#update-post').addEventListener('click', updatePost);