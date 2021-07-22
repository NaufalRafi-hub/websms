import React, { useState, useEffect } from "react";
import imageSlider from "../Carousel/imageSlider";
import { useParams } from "react-router-dom";
import Data from "./Data.js";

const ContentOW = () => {
  // const [content,setContent] = useState([])
  console.log(imageSlider);
  const { idPT, key, type} = new useParams();
  // const { key } = new useParams();

  // useEffect(() => {
  //   const defContent = imageSlider.data[key].filter((data) => data.title === {idPT});
  //   setContent(defContent);
  // },[])
  return (
    <div className="container">
      {/* <Data imageSlider={content} /> */}
      {imageSlider[type].data[key].product.map((data, index) => (
        <div key={index}>
          <h1>{data.name}</h1>
          <h2>{data.desc}</h2>
        </div>
      ))}
      {/* <h2>{idPT}</h2> */}
    </div>
  );
};

export default ContentOW;
