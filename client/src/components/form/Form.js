import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import "./form.css";

const Form = ({ currentId, setCurrentId }) => {
  const [showError, setShowError] = useState(false);
  const [postData, setPostData] = useState({
    firstName: "",
    lastName: "",
    message: "",
  });

  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData, { ...postData }));
    }

    clear();
  };
  const clear = () => {
    setCurrentId(null);
    setPostData({
      firstName: "",
      lastName: "",
      message: "",
    });
  };
  return (
    <div className="form-container">
      <div className="post-form">
        <h2>{currentId ? "Edit this post" : "Create a post"}</h2>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              placeholder="First Name"
              className="post-input"
              value={postData.firstName}
              onChange={(e) =>
                setPostData({ ...postData, firstName: e.target.value })
              }
            />
            <span className="input-error">Need a first name</span>
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Last Name"
              className="post-input"
              value={postData.lastName}
              onChange={(e) =>
                setPostData({ ...postData, lastName: e.target.value })
              }
            />
            <span className="input-error">Need a last name</span>
          </div>

          <div className="input-container">
            <input
              type="text"
              placeholder="Message"
              className="post-input"
              value={postData.message}
              onChange={(e) =>
                setPostData({ ...postData, message: e.target.value })
              }
            />
            <span className="input-error">Enter a message</span>
          </div>

          <button className="btn form-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
