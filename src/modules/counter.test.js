/** @jest-environment jsdom */

import countItems from './counter.js';

document.body.innerHTML = `
  <header class="navbar">
      
  </header>

    <div class="container"></div>
    <footer class="footer"></footer>
`;

describe('countItems()', () => {
  test('should return 0 as correct count of ul elements with .movie class name', () => {
    countItems();
    const movieNumber = document.querySelectorAll('.movie').length;
    expect(movieNumber).toBe(0);
  });

  test('return 3 as correct count of ul elements with .movie class name', () => {
    countItems();
    const movieContainer = document.querySelector('.container');
    movieContainer.innerHTML = `
      <ul class="movie">movie content</ul>
      <ul class="movie">movie content</ul>
      <ul class="movie">movie content</ul>
    `;
    const movieNumber = document.querySelectorAll('.movie').length;
    expect(movieNumber).toBe(3);
  });
});