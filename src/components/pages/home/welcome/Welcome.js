import React from "react";
import img from "./welcome.jpg";

const Welcome = () => {
  return (
    <div className="container" style={{ padding: "50px 30px" }}>
      <div className="grid-2">
        <div className="welcome-img">
          <img src={img} alt="welcome image" />
        </div>
        <div className="welcome-text">
          <h1>Welcome To Yamifood Restaurant</h1>
          <span>Little Story</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque auctor suscipit feugiat. Ut at pellentesque ante, sed
            convallis arcu. Nullam facilisis, eros in eleifend luctus, odio ante
            sodales augue, eget lacinia lectus erat et sem.
          </p>
          <p>
            Sed semper orci sit amet porta placerat. Etiam quis finibus eros.
            Sed aliquam metus lorem, a pellentesque tellus pretium a. Nulla
            placerat elit in justo vestibulum, et maximus sem pulvinar.
          </p>
          <button className="btnTrans">RESERVATION</button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
