import { postLike, updateLikes } from './addBtnLike.js';
import countItems from './counter.js';

const baseURL = 'https://api.tvmaze.com/search/shows?q=war';
const container = document.querySelector('.container');

export async function fetchData() {
  try {
    const response = await fetch(baseURL);
    const data = await response.json();

    const code = data.map(
      (movie) => `
    <ul class="movie" id="${movie.show.id}">
    <li class="overflow">
      <img src="${movie.show.image.original}" alt="girl picture" class="movie-img" />
    </li>
    <li class="title-like">
    <h2 class="movie-name">${movie.show.name}</h2>
    <button class="like-btn" data-show="${movie.show.id}">Like</button>
  </li>
  <li><p class="likes">0 Likes</p></li> 
  <li class="comment-reservation">
 
    <button class="comment-btn" data-id="${movie.show.id}" data-movie="${movie}" data-itemlink="${movie.show._links.self.href}">Comment</button>
    <button class="reservation-btn">reservation</button>
  </li>
  </ul>
    `,
    );

    container.innerHTML = code;
    countItems();
    const likeBtns = document.querySelectorAll('.like-btn');
    likeBtns.forEach((btn) => {
      btn.addEventListener('click', async () => {
        const id = btn.dataset.show;
        if (btn.innerHTML === 'Like') {
          const movie = await postLike(id);
          if (movie) {
            btn.innerHTML = 'Liked';
            await updateLikes();
          }
        } else {
          // eslint-disable-next-line no-alert
          alert('Already liked this!');
        }
      });
    });
    await updateLikes();
  } catch (error) {
    throw new Error(error);
  }
}

export default fetchData;
