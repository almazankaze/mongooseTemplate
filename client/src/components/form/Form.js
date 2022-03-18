import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";
import "./form.css";

const Form = () => {
  const [showError, setShowError] = useState(false);
  const [postData, setPostData] = useState({
    firstName: "",
    lastName: "",
    message: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(postData, { ...postData }));
  };
  const clear = () => {};
  return (
    <div className="form-container">
      <div className="post-form">
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
              value={postData.lasttName}
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
