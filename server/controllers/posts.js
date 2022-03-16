import mongoose from "mongoose";
import Post from "../models/post.js";

export const getPosts = async (req, res) => {
  try {
    const myPosts = await Post.find();

    res.status(200).json(myPosts);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

export const createPost = async (req, res) => {
  const postInfo = req.body;

  const newPost = new Post(postInfo);
  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (e) {
    res.status(409).json({ message: e.message });
  }
};
