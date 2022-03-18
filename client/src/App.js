import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import Form from "./components/form/Form";
import PostsContainer from "./components/posts/PostsContainer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <Form />
      <PostsContainer />
    </div>
  );
};

export default App;
