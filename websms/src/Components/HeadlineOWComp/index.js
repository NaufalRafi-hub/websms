import React from "react";
import "./HeadlineOW.css";
import {BackIcon, BackIconDiv} from "./HeadlineOWElements"

const HeadlineOwComp = () => {
  return (
    <div className="container-fluid">
      <div className="judul-OW">
        <h1>Product Showcase</h1>
      </div>
      <div className="OWIcon">
        <BackIconDiv>
          <BackIcon />
          <h2>back</h2>
        </BackIconDiv>
      </div>
    </div>
  );
};

export default HeadlineOwComp;