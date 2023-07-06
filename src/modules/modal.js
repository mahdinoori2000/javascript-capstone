import { commentBaseUrl } from "./api.js";
import { getComment, postComment } from "./commentDisplay.js";
// import close-modal from './close-modal.png'

export const modalView = (movie) => {
  const commentContainer = document.querySelector(".comment-container");
  const commentContent = document.createElement("div");
  commentContent.classList.add("comment-content");
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

  const closeModalBtn = document.querySelector(".close-modal");
  const closeModal = () => {
    commentContainer.style.display = "none";
  };

  closeModalBtn.addEventListener("click", closeModal);
};

// const form = document.querySelector(".comment-form");
// form.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const name = document.querySelector(".name").value;
//   const commentMessage = document.querySelector(".textarea").value;
//   try {
//     await fetch(commentBaseUrl + `comments`, {
//       method: "POST",
//       headers: {
//         "content-type": "application.json",
//       },
//       body: JSON.stringify({
//         item_id: `${movie.show.id}`,
//         username: name,
//         comment: commentMessage,
//       }),
//     });
//   } catch (error) {
//     throw new Error(error);
//   }
//   document.querySelector(".name").value = "";
//   document.querySelector(".textarea").value = "";
// });

// const closeModalBtn = document.querySelector(".close-modal");
// const closeModal = () => {
//   commentContainer.style.display = "none";
// };

// closeModalBtn.addEventListener("click", closeModal);

//  <h4 class="comments-heading">Comments (${comments.length})</h4>
//           <div class="comments">
//             <ul class="comment-list">
//              <li class="comment-item">${date} ${user} : ${comment}</li>
//            </ul>
//           </div>
//         <form action="submit" class="comment-form">
//           <input type="text" placeholder="Your name" class="name"/>
//           <textarea
//             name=""
//             id="textarea"
//             class="textarea"
//             placeholder="Your insights"
//             cols="30"
//             rows="10"
//           ></textarea>
//           <button class="button">Comment</button>
//         </form>
