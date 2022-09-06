import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Cities() {
  return (
    <div class="carousel-wrapper">
      <div className="cities-heading">
        <h1>CITIES...</h1>
      </div>
      <div className="carousel">
        <Carousel infiniteLoop useKeyboardArrows autoPlay>
          <div className="carousel-img img-1">
            <h3>DELHI</h3>
          </div>
          <div className="carousel-img img-2">
            <h3>GURUGRAM</h3>
          </div>
          <div className="carousel-img img-3">
            <h3>BANGLORE</h3>
          </div>
          <div className="carousel-img img-4">
            <h3>MUMBAI</h3>
          </div>
          <div className="carousel-img img-5">
            <h3>NOIDA</h3>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
