const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const appID = 'fvEG8bcfusuKIAC9Au4g';
let itemLikes = [];

async function getLikes() {
  try {
    const response = await fetch(`${baseURL}/${appID}/likes/`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (response.status === 200) {
      itemLikes = await response.json();
      return true;
    }
    return null;
  } catch (error) {
    throw new Error('Error getting likes:', error);
  }
}
async function getLikesByMovie(id) {
  await getLikes();
  const likes = itemLikes.find((item) => item.item_id === id);
  return likes ? likes.likes : 0;
}