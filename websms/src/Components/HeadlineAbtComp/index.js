import React from "react";
import "./AboutdetailComp.css";
import aboutus from "../../images/aboutus.png"
import { BackIcon, BackIconDiv } from "./AboutdetailComp";

const HeadlineAbtComp = () => {
  return (
    <div className="container-fluid">
      <div className="judul-aboutdet">
        <h1>About Us</h1>
        <BackIconDiv>
          <BackIcon />
          <h2>back</h2>
        </BackIconDiv>
      </div>
      <div className="img-about-detail">
        <img src={aboutus} alt="Kantor" className="img-about2" width="600" />
      </div>
    </div>
  );
};

export default HeadlineAbtComp;
