import { postComment, getComment } from "./commentDisplay.js";
import { modalView } from "./modal.js";

const commentBtnEventListener = () => {
  const commentBtn = document.querySelectorAll(".comment-btn");
  commentBtn.forEach((button) => {
    button.addEventListener("click", async (e) => {
      const dataId = e.target.getAttribute("data-id");
      const movie = e.target.getAttribute("data-movie");
      const link = e.target.getAttribute("data-itemlink");
      const showToDisplay = fetchShowUrl(link);
      showToDisplay.then((movie) => {
        modalView(movie);
      });
      // modalView();

      // console.log(link);
      // console.log(movie);
      // const comment = await getComment(e, dataId);
      // console.log(comment);
      // console.log(dataId);

      const commentContainer = document.querySelector(".comment-container");
      commentContainer.style.display = "block";
    });
  });
};

const fetchShowUrl = async (url) => {
  let toReturn = await fetch(url);
  return await toReturn.json();
};

export default commentBtnEventListener;
