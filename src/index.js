import "./style.css";
import { fetchData } from "./modules/fetchAPI.js";
import { postComment, getComment } from "./modules/commentDisplay.js";

await fetchData();

const commentBtn = document.querySelectorAll(".comment-btn");
commentBtn.forEach((button) => {
  button.addEventListener("click", async (e) => {
    const dataId = e.target.getAttribute("data-id");
    const comment = await getComment(dataId);
    console.log(comment);
  });
});
