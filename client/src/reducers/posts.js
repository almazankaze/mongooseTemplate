import { FETCH_POSTS, CREATE_POST } from "../constants/actionTypes";

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    case CREATE_POST:
      return [...posts, action.payload];
    default:
      return posts;
  }
};
