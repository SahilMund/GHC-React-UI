import React from "react";
import "../styles/Carousel.css";
import { Insta } from "../static";

const InstaBanner = () => {
  return (
    <div className="carousel">
      <div className="trackers">
        <img src={Insta} alt="" style={{ width: "37px", height: "37px" }} />
        <span>Join our 10K family on Instagram</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="13"
          viewBox="0 0 8 13"
          fill="none"
        >
          <path
            d="M0 11.4725L4.94467 6.5L0 1.5275L1.52227 0L8 6.5L1.52227 13L0 11.4725Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default InstaBanner;
