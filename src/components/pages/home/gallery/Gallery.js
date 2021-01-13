import React, { useState } from "react";
import data from "./data";

const Gallery = () => {
  const [picture] = useState(data);
  const [modalOpen, setModalOpen] = useState(false);
  const [current, setCurrent] = useState(1);

  const modalFunc = (id) => {
    const findItem = picture.find((item) => item.id === id);
    setCurrent(findItem.id);
    setModalOpen(true);
  };

  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
      <div className="grid-3">
        {picture.map((item) => {
          return (
            <div key={item.id} onClick={() => modalFunc(item.id)}>
              <img src={item.img} alt={`image${item.id}`} />
            </div>
          );
        })}
      </div>
      {modalOpen && (
        <div className="gallery-modal">
          <p className="close-modal" onClick={() => setModalOpen(false)}>
            &times;
          </p>
          {picture.map((pic) => {
            if (pic.id === current) {
              return (
                <div>
                  <img src={pic.img} alt={`image${pic.id}`} />
                </div>
              );
            }
            return;
          })}
        </div>
      )}
    </div>
  );
};

export default Gallery;
