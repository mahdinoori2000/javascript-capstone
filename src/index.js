import "./style.css";
import { fetchData } from "./modules/fetchAPI.js";
import commentBtnEventListener from "./modules/comment.js";

await fetchData();
commentBtnEventListener();
const closeModalBtn = document.querySelector(".close-modal");
const closeModal = () => {
  commentContainer.style.display = "none";
};

closeModalBtn.addEventListener("click", closeModal);
