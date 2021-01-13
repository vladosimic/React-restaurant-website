import React from "react";
import FoodMenu from "./home/menu/FoodMenu";

const Menu = () => {
  return (
    <div>
      <div className="intro-sub">
        <div className="overlay"></div>
        <h1>Special Menu</h1>
      </div>
      <FoodMenu />
    </div>
  );
};

export default Menu;
