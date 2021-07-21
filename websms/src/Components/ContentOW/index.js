import React, {useState, useEffect} from "react";
import imageSlider from "../Carousel/imageSlider";
import { useParams } from "react-router-dom";
import Data from "./Data.js";

const ContentOW = () => {
  const [content,setContent] = useState('')
  console.log(imageSlider);
  const {idPT} = new useParams();
  useEffect(() => {
    const defContent = imageSlider.filter((data) => data.title === {idPT});
    setContent(defContent);
  },[])
  return (
    <div className="container">
        <Data imageSlider={content} />
        {/* <h2>{idPT}</h2> */}
    </div>
  );
};

export default ContentOW;
