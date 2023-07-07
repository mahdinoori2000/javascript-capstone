import commentBaseUrl from "./api.js";

const countComments = async (id) => {
  const params = {
    item_id: id,
  };
  const searchParams = new URLSearchParams(params);
  const response = await fetch(`${commentBaseUrl}comments?${searchParams}`);
  const result = await response.json();
  return result.length;
};

export { countComments };

// import { countComments } from "../modules/commentCount.js";

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () =>
//       Promise.resolve([
//         {
//           username: "Salim",
//           creation_date: "2023-06-24",
//           comment: "Good show",
//         },
//         {
//           creation_date: "2022-04-11",
//           username: "Hamza",
//           comment: "Bad review",
//         },
//         {
//           creation_date: "2020-04-05",
//           username: "Mahdi",
//           comment: "Great movie",
//         },
//       ]),
//   })
// );
// describe("comment counter tests using Jest", () => {
//   test("test Comment Count ", async () => {
//     const response = await countComments(3);
//     expect(response.length).toBe(3);
//   });
//   test("Wrong test Comment Count", async () => {
//     const response = await countComments(3);
//     expect(response.length).not.toBe(1);
//   });
// });
