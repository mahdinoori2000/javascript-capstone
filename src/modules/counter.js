const countItems = () => {
  setTimeout(() => {
    const movieNums = document.querySelectorAll('.movie').length;
    const movieNumber = document.getElementById('movie-number');
    movieNumber.innerHTML = movieNums;
  }, 1000);
};
export default countItems;