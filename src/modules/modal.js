const modalView = (movie) => {
  const commentContainer = document.querySelector('.comment-container');
  const commentContent = document.createElement('div');
  commentContent.classList.add('comment-content');
  commentContent.innerHTML = `<span class="material-symbols-outlined close-modal">
                           close
                    </span>
          <img src="${movie.image.original}" alt="movie-img" class="movie-img" />
          <h3 class="movie-names">${movie.name}</h3>
          <div class="features">
            <div class="language-genre">
              <span>Language: ${movie.language}</span>
              <span>Genre: ${movie.type}</span>
            </div>
            <div class="runtime-premiered">
              <span>Runtime: ${movie.runtime}mins</span>
              <span>Premiered: ${movie.premiered}</span>
            </div>
          </div>
         `;
  commentContainer.appendChild(commentContent);

  const closeModalBtn = document.querySelector('.close-modal');
  const closeModal = () => {
    commentContainer.style.display = 'none';
    commentContainer.innerHTML = '';
  };

  closeModalBtn.addEventListener('click', closeModal);
};
export default modalView;
