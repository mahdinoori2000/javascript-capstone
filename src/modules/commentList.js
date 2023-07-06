const commentList = (comment) => {
  if (!comment.error) {
    const commentHeading = document.querySelector('.comments-heading');
    commentHeading.textContent = `Comments (${comment.length})`;
    let commentListString = '';
    const commentList = document.querySelector('.comment-list');
    comment.forEach((item) => {
      commentListString += `<li>${item.creation_date} ${item.username}: ${item.comment}</li>`;
    });
    commentList.innerHTML = commentListString;
  }
};

export default commentList;
