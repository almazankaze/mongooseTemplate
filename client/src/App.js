import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import Form from "./components/form/Form";
import PostsContainer from "./components/posts/PostsContainer";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <div>
      <Form currentId={currentId} setCurrentId={setCurrentId} />
      <PostsContainer setCurrentId={setCurrentId} />
    </div>
  );
};

export default App;
