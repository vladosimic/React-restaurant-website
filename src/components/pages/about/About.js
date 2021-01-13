import React from "react";
import Welcome from "../home/welcome/Welcome";

const About = () => {
  return (
    <div>
      <div>
        <div className="intro-sub">
          <div className="overlay"></div>
          <h1>About Us</h1>
        </div>
        <Welcome />
      </div>
    </div>
  );
};

export default About;
