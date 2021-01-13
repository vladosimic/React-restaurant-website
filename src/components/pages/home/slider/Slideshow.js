import React, { useState, useEffect } from "react";
import slider1 from "./slides/slideImages/slider1.jpg";
import slider2 from "./slides/slideImages/slider2.jpg";
import slider3 from "./slides/slideImages/slider3.jpg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const imgs = [slider1, slider2, slider3];

const Slideshow = () => {
  const [slide] = useState(imgs);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const lastIndex = slide.length - 1;
    if (currentSlide < 0) {
      setCurrentSlide(lastIndex);
    }
    if (currentSlide > lastIndex) {
      setCurrentSlide(0);
    }
  }, [currentSlide, slide]);

  useEffect(() => {
    let slider = setInterval(() => {
      setCurrentSlide(currentSlide + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [currentSlide]);

  return (
    <div className="slider">
      <div
        className="prevSlide slideArrows"
        onClick={() => setCurrentSlide(currentSlide - 1)}
      >
        <FaAngleLeft></FaAngleLeft>
      </div>
      {imgs.map((item, index) => {
        if (index === currentSlide) {
          return (
            <div key={index} className="each-slide">
              <div className="overlay"></div>
              <img src={item} alt={`img${index}`}></img>
            </div>
          );
        }
        return;
      })}

      <div
        className="nextSlide slideArrows"
        onClick={() => setCurrentSlide(currentSlide + 1)}
      >
        <FaAngleRight></FaAngleRight>
      </div>
      <div className="intro">
        <h1>Welcome To Yamifood Restaurant</h1>
        <p>
          See how your users experience your website in realtime or view trends
          to see any changes in performance over time.
        </p>
        <button className="btnTrans">RESERVATION</button>
      </div>
    </div>
  );
};

export default Slideshow;
