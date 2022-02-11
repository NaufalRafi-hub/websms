import React from "react";
import { Row, Col } from "react-bootstrap";
import "./HomeComp.css";

const HomeComp = () => {
  return (
    <div className="home-wrapper">
      <div className="hero"></div>
      <div className="sub-home">
        <h1>SMS</h1>
        <h2>"Jasa Cetak dalam Satu Atap"</h2>
      </div>
    </div>
  );
};

export default HomeComp;
