import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_rm3rvnm",
        e.target,
        "user_vSDgEzwhMlhn7D1qXFdB7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div>
      <div>
        <div className="intro-sub">
          <div className="overlay"></div>
          <h1>Contact Us</h1>
        </div>
        <form onSubmit={sendEmail} className="myForm">
          <label htmlFor="name">Name </label>
          <input type="text" name="name" required minLength="3" />
          <br />
          <label htmlFor="email">Email </label>
          <input type="email" name="email" required />
          <br />

          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            required
            placeholder="your message..."
          ></textarea>
          <br />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
