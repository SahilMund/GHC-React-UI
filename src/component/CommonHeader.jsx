import React from "react";

import '../styles/CommonHeader.css';

const CommonHeader = ({ title, displayViewAll }) => {
  return (
    <div className="header">
      <div className="title" >{title}</div>
      { displayViewAll && <div className="options">View All</div>}
    </div>
  );
};

export default CommonHeader;
