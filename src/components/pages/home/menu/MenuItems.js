import React, { useState } from "react";

const MenuItems = ({ items }) => {
  const [itemId, setItemId] = useState(null);

  return (
    <div className="grid-3 container">
      {items.map((item) => {
        const { id, title, price, img } = item;
        return (
          <div
            key={id}
            className="food-item"
            style={{ backgroundImage: `url(${img})` }}
            onMouseEnter={() => setItemId(id)}
            onMouseLeave={() => setItemId(null)}
          >
            {itemId === id && (
              <div className="food-desc">
                <h3>{title}</h3>
                <p>${price}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MenuItems;
