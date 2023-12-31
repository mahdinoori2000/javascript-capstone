import { getComment } from './commentDisplay.js';
import commentList from './commentList.js';
import modalView from './modal.js';

const fetchShowUrl = async (url) => {
  const toReturn = await fetch(url);
  return toReturn.json();
};
const commentBtnEventListener = () => {
  const commentBtn = document.querySelectorAll('.comment-btn');
  commentBtn.forEach((button) => {
    button.addEventListener('click', async (e) => {
      const link = e.target.getAttribute('data-itemlink');

      const showToDisplay = fetchShowUrl(link);
      showToDisplay.then(async (movie) => {
        modalView(movie);
        const comment = await getComment(movie.id);
        commentList(comment);
      });

      const commentContainer = document.querySelector('.comment-container');
      commentContainer.style.display = 'block';
    });
  });
};

export default commentBtnEventListener;
