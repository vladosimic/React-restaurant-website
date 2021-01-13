import React, { useState, useEffect } from "react";
import data from "./data";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Reviews = () => {
  const [customer] = useState(data);
  const [customerIndex, setCustomerIndex] = useState(1);

  useEffect(() => {
    const lastIndex = customer.length - 1;
    if (customerIndex > lastIndex) {
      setCustomerIndex(0);
    }
    if (customerIndex < 0) {
      setCustomerIndex(lastIndex);
    }
  }, [customerIndex, customer]);

  useEffect(() => {
    let slider = setInterval(() => {
      setCustomerIndex(customerIndex + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [customerIndex]);

  return (
    <div style={{ textAlign: "center" }} className="container">
      <h1>Customer Reviews</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
      <div className="review-slideshow">
        <div
          className="prevReview"
          onClick={() => setCustomerIndex(customerIndex - 1)}
        >
          <FaAngleLeft></FaAngleLeft>
        </div>

        {customer.map((person, index) => {
          const { id, name, img, review, job } = person;
          if (index === customerIndex) {
            return (
              <div key={id}>
                <img src={img} alt={name} />
                <h3 style={{ fontWeight: "bold" }}>{name}</h3>
                <span>{job}</span>
                <p>{review}</p>
              </div>
            );
          }
          return;
        })}
        <div
          className="nextReview"
          onClick={() => setCustomerIndex(customerIndex + 1)}
        >
          <FaAngleRight></FaAngleRight>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
