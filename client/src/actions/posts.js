import { FETCH_POSTS, CREATE_POST } from "../constants/actionTypes";

import * as api from "../api/index";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_POSTS, payload: data });
  } catch (e) {
    console.log("could not get posts");
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE_POST, payload: data });
  } catch (e) {
    console.log("could not create post");
  }
};
