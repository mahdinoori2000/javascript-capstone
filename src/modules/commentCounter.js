import commentBaseUrl from './api.js';

const countComments = async (id) => {
  const params = {
    item_id: id,
  };
  const searchParams = new URLSearchParams(params);
  const response = await fetch(`${commentBaseUrl}comments?${searchParams}`);
  const result = await response.json();
  return result.length;
};

export default countComments;
