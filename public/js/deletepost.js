const deletePost = async (event) => {
    event.preventDefault()
    const postID = document.getElementbyId('post-id');
    postID = postID.value;
    console.log(postID)

    const response = await fetch('/api/post/' + postID, {
        method: 'DELETE'
    });

    console.log('response through js file' + response)
  
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to delete.');
    };
};

document.querySelector('#delete-btn').addEventListener('click', deletePost);