import React from "react";
import Slideshow from "./slider/Slideshow";
import Welcome from "./welcome/Welcome";
import Quote from "./quote/Quote";
import FoodMenu from "./menu/FoodMenu";
import Gallery from "./gallery/Gallery";
import Reviews from "./reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Slideshow />
      <Welcome />
      <Quote />
      <FoodMenu />
      <Gallery />
      <Reviews />
    </div>
  );
};

export default Home;
