import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import "./posts.css";

const PostsContainer = () => {
  const posts = useSelector((state) => state.posts);
  return !posts ? (
    <div></div>
  ) : (
    <div className="cards-container">
      <div className="cards">
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostsContainer;
