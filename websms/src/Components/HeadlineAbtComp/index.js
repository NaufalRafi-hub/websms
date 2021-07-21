import React from "react";
import "./AboutdetailComp.css";
import aboutus from "../../images/aboutus.png"
import { BackIcon, BackIconDiv } from "./AboutdetailComp";
import { Link } from "react-router-dom";

const HeadlineAbtComp = () => {
  return (
    <div className="container-fluid">
      <div className="judul-aboutdet">
        <h1>About Us</h1>
      </div>
      <div className="judul-aboutdetIcon">
        <BackIconDiv>
          <BackIcon />
          <Link to="/" className="IconLink">back</Link>
        </BackIconDiv>
      </div>
      <div className="img-about-detail">
        <img src={aboutus} alt="Kantor" className="img-about2" width="600" />
      </div>
    </div>
  );
};

export default HeadlineAbtComp;
