import { getComment } from './commentDisplay.js';
import commentBaseUrl from './api.js';
import commentList from './commentList.js';

const modalView = (movie) => {
  const commentContainer = document.querySelector('.comment-container');
  const commentContent = document.createElement('div');
  commentContent.classList.add('comment-content');
  commentContent.innerHTML = `<span class="material-symbols-outlined close-modal">
                           close
                    </span>
          <img src="${movie.image.original}" alt="movie-img" class="comment-movie-img" />
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
          <h4 class="comments-heading">Comments ()</h4>
          <div class="comments">
            <ul class="comment-list">
             
           </ul>
          </div>
        <form action="submit" class="comment-form" data-id="${movie.id}">
          <input type="text" placeholder="Your name" class="name input"/>
          <textarea
            name=""
            id="textarea"
            class="textarea input"
            placeholder="Your insights"
            cols="30"
            rows="2"
          ></textarea>
          <button class="button">Comment</button>
        </form>
         `;
  commentContainer.appendChild(commentContent);

  const closeModalBtn = document.querySelector('.close-modal');
  const closeModal = () => {
    commentContainer.style.display = 'none';
    commentContainer.innerHTML = '';
  };

  const form = document.querySelector('.comment-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = e.target.getAttribute('data-id');

    const name = document.querySelector('.name').value;
    const commentMessage = document.querySelector('.textarea').value;
    try {
      await fetch(`${commentBaseUrl}comments`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          item_id: id,
          username: name,
          comment: commentMessage,
        }),
      });
      const comment = await getComment(id);
      commentList(comment);
    } catch (error) {
      throw new Error(error);
    }
    document.querySelector('.name').value = '';
    document.querySelector('.textarea').value = '';
  });

  closeModalBtn.addEventListener('click', closeModal);
};
export default modalView;
