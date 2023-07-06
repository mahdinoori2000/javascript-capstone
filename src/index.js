import './style.css';
import { fetchData } from './modules/fetchAPI.js';
import commentBtnEventListener from './modules/comment.js';

await fetchData();
commentBtnEventListener();

// const fetchComments = async (itemId) => {
//   try {
//     const response = await fetch(
//       `https://api.involvement-api.com/items/${itemId}/comments`
//     );
//     if (!response.ok) {
//       throw new Error("Failed to fetch comments.");
//     }
//     const data = await response.json();
//     return data.comments;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };

// export default fetchComments;
