import React from "react";

const Category = ({ categories, change }) => {
  return (
    <ul className="foodNav" style={{ padding: "30px" }}>
      {categories.map((item, index) => {
        return (
          <li
            key={index}
            onClick={() => change(item)}
            style={{ textTransform: "capitalize" }}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default Category;
