import './style.css';
import { fetchData } from './modules/fetchAPI.js';
import commentBtnEventListener from './modules/comment.js';

await fetchData();
commentBtnEventListener();
