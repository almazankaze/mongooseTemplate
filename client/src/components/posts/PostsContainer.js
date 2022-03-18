import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import "./posts.css";

const PostsContainer = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div className="cards-container">
      <div className="cards">
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default PostsContainer;
