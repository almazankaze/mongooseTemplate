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

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id exists");

  try {
    const updatedPost = await Post.findByIdAndUpdate(
      _id,
      { ...post, _id },
      { new: true }
    );

    res.json(updatedPost);
  } catch (e) {
    res.json({ message: e.message });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id exists");

  try {
    await Post.findByIdAndRemove(id);

    res.json({ message: "Post was deleted successfully" });
  } catch (e) {
    res.json({ message: e.message });
  }
};
