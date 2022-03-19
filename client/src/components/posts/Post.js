import React from "react";
import moment from "moment";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Post = ({ post, setCurrentId }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-text">
          <h2>{post.firstName + " " + post.lastName}</h2>
          <p>{moment(post.createdAt).fromNow()}</p>
          <p>{post.message}</p>
        </div>
        <div className="card-footer">
          <IconButton aria-label="delete">
            <DeleteIcon sx={{ fontSize: 32, color: "red" }} />
          </IconButton>
          <IconButton aria-label="edit" onClick={() => setCurrentId(post._id)}>
            <EditIcon sx={{ fontSize: 32, color: "blue" }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Post;
