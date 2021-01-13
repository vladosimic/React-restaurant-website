import React, { useState } from "react";
import data from "./data";
import MenuItems from "./MenuItems";
import Category from "./Category";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const FoodMenu = () => {
  const [food, setFood] = useState(data);
  const [category] = useState(allCategories);

  const change = (category) => {
    if (category === "all") {
      setFood(data);
      return;
    }
    const filterByCategory = data.filter((item) => item.category === category);
    setFood(filterByCategory);
  };

  return (
    <div style={{ textAlign: "center", marginBottom: "50px" }}>
      <h1 style={{ marginTop: "40px" }}>Special Menu</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
      <Category categories={category} change={change} />
      <div className="food">
        <MenuItems items={food} />
      </div>
    </div>
  );
};

export default FoodMenu;
