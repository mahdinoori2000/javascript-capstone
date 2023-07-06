const baseUrl = 'https://api.tvmaze.com/search/shows?q=war';
const container = document.querySelector('.container');
const movieNum = document.getElementById('movie-number');

export const fetchData = async () => {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    const code = data.map(
      (movie) => `
    <ul class="movie" id="${movie.show.id}">
    <li class="overflow">
      <img src="${movie.show.image.original}" alt="girl picture" class="movie-img" />
    </li>
    <li class="title-like">
    <h2 class="movie-name">${movie.show.name}</h2>
    <button class="like-btn">Like</button>
  </li>
  <li><p class="likes">0 Likes</p></li> 
  <li class="comment-reservation">
  //  eslint no-underscore-dangle: 0 
    <button class="comment-btn" data-id="${movie.show.id}" data-movie="${movie}" data-itemlink="${movie.show._links.self.href}">Comment</button>
    <button class="reservation-btn">reservation</button>
  </li>
  </ul>
    `,
    );
    container.innerHTML = code;
    movieNum.innerHTML = data.length;
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchData;
