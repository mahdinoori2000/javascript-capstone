import { commentBaseUrl } from "./api.js";

const postComment = async (comment) => {
  try {
    await fetch(commentBaseUrl, {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};

const getComment = async (e, id) => {
  console.log(id);
  const params = {
    item_id: id,
  };

  const searchParams = new URLSearchParams(params);
  const dataId = e.target.getAttribute("data-id");

  const response = await fetch(commentBaseUrl + `?` + searchParams, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export { postComment, getComment };
