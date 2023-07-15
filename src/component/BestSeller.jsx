import React from "react";
import CustomCard from "./CustomCard";

import { BestSellerImg, HaiCare1, HaiCare2 } from "../static";
import CommonHeader from "./CommonHeader";

import "../styles/BestSeller.css";

const BestSeller = ({ title }) => {
  const BestSellerData = [
    {
      image: BestSellerImg,
      name: "Anti-ageing Combo",
      rating: "(4.7)",
      price: 999,
      OriginalPrice: "1,598",
    },
    {
      image: BestSellerImg,
      name: "Anti-ageing Combo",
      rating: "(4.7)",
      price: 999,
      OriginalPrice: "1,598",
    },
  ];
  const HairCareData = [
    {
      image: HaiCare1,
      name: "Anti-ageing Combo",
      rating: "(4.7)",
      price: 999,
      OriginalPrice: "1,598",
    },
    {
      image: HaiCare2,
      name: "Anti-ageing Combo",
      rating: "(4.7)",
      price: 999,
      OriginalPrice: "1,598",
    },
  ];
  return (
    <div className="bestSeller-main">
      <CommonHeader title={title} displayViewAll />

      <CustomCard
        data={title === "Hair Care" ? HairCareData : BestSellerData}
      />
    </div>
  );
};

export default BestSeller;
