import React from "react";
import "./HeadlineOW.css";
import {BackIcon, BackIconDiv} from "./HeadlineOWElements"
import { Link } from "react-router-dom";

const HeadlineOwComp = () => {
  return (
    <div className="container-fluid">
      <div className="judul-OW">
        <h1>Product Showcase</h1>
      </div>
      <div className="OWIcon">
        <BackIconDiv>
          <BackIcon />
          <Link to={"/"}className="link-prod">back</Link>
        </BackIconDiv>
      </div>
    </div>
  );
};

export default HeadlineOwComp;
