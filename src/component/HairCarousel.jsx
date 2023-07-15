import React from "react";
import CommonHeader from "./CommonHeader";

import '../styles/HairCarousel.css'

const HairCarousel = ({ title, displayViewAll , image }) => {
  return (
    <div>
      <CommonHeader title={title} displayViewAll={displayViewAll} />
      <div className="carousel-main">
        <div className="image-container">
          <img src={image} alt="" />
          <span className="caption">
            Groom to Perfection: Aloe Vera Hair Mask for Men's Hair Care
          </span>
          <br></br>
          <span className="author">
          By Mars by GHC on Jun 22, 2022          </span>
        </div>
      </div>
    </div>
  );
};

export default HairCarousel;
