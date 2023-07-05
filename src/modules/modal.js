import { getComment, postComment } from "./commentDisplay.js";

const modalContents = async (id) => {
  let dataComment = await getComment(id);
  if (dataComment.length === undefined) {
    comments = [];
  }
};

const commentContainer = document.querySelector(".commment-container");
const commentContent = document.createElement("div");
commentContent.classList.add("comment-content");
commentContent.innerHTML = `<img
          src="./images/close-modal.png"
          alt="X"
          class="close-modal"
        />
        <img src="${movie.show.image.original}" alt="movie-img" class="movie-img" />
        <h3 class="movie-name">${movie.show.name}</h3>
        <div class="features">
          <div class="language-genre">
            <span>Language: ${movie.language}</span>
            <span>Genre: ${movie.genre}</span>
          </div>
          <div class="runtime-premiered">
            <span>Runtime: ${movie.runtime}</span>
            <span>Premiered: ${movie.premiered}</span>
          </div>
        </div>
        <h4 class="comments-heading">Comments (${comments.lenght})</h4>
        <div class="comments">
  <ul class="comment-list">
    <li class="comment-item">${date} ${username} : ${comment}</li>
  </ul>
</div>
<form action="submit" class="comment-form">
  <input type="text" placeholder="Your name" class="name"/>
  <textarea
    name=""
    id="textarea"
    class="textarea"
    placeholder="Your insights"
    cols="30"
    rows="10"
  ></textarea>
  <button class="button">Comment</button>
</form> `;

commentContainer.appendChild(commentContent);

const form = document.querySelector(".comment-form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.querySelector(".name").value;
  const commentMessage = document.querySelector(".textarea").value;
  const commentInput = {
    item_id: index.toString(),
    username: name,
    comment: commentMessage,
  };
  comments.push(commentInput);
});

const closeModalBtn = document.querySelector(".close-modal");
const closeModal = () => {
  commentContainer.style.display = "none";
};

closeModalBtn.addEventListener("click", closeModal);
