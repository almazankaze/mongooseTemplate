import React from "react";
import "./form.css";

const Form = () => {
  return (
    <div className="form-container">
      <div className="post-form">
        <form autocomplete="off">
          <div className="input-container">
            <input
              type="text"
              placeholder="First Name"
              className="post-input"
            />
            <span className="input-error">Need a first name</span>
          </div>
          <div className="input-container">
            <input type="text" placeholder="Last Name" className="post-input" />
            <span className="input-error">Need a last name</span>
          </div>

          <div className="input-container">
            <input type="text" placeholder="Message" className="post-input" />
            <span className="input-error">Enter a message</span>
          </div>

          <button className="btn form-btn" type="button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
