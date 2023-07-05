import { commentBaseUrl } from "./api.js";

const postComment = async (comment, id) => {
  await fetch(commentBaseUrl + `apps/${id}/comments`, {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const getComment = async (id) => {
  const params = {
    item_id: id,
  };

  const searchParams = new URLSearchParams(params);
  const response = await fetch(commentBaseUrl + `comments?` + searchParams, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export { postComment, getComment };
