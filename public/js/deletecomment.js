// // Delete comment
// const deleteComment = async (event) => {

//     event.preventDefault()
//     console.log('click')
//     let commentID = document.querySelector('.comment-id');
//     commentID = commentID.value;
//     console.log(commentID)
//     const response = await fetch('/api/comment/' + commentID, {
//         method: 'DELETE'
//     });

//     console.log('response through js file' + response)
  
//     if (response.ok) {
//         document.location.replace(`/`);
//     } else {
//         alert('Failed to delete.');
//     };
// };

// document.querySelector('.delete-comment-btn').addEventListener('click', deleteComment);