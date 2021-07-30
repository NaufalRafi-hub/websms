import React, {useState, useEffect, useRef} from "react";
import imageSlider from "../Carousel/imageSlider";
import { Img, ImgSrc, ImgWrapper } from "./ContentOWElements";
import Loading from "../../images/loading.gif";
import { motion } from "framer-motion";

const Image = ({ type, keys, idx }) => {
  
  const [loading, setLoading] = useState(true);
  const counter = useRef(0);
  const array = imageSlider[type].data[keys].product[idx].image;
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= array.length) {
      setLoading(false);
    }
  }

  return (
    <>
      <div style={{display: loading ? "block" : "none"}}>
        <img src={Loading} alts=""></img>
        {/* Loading... */}
      </div>
      <ImgWrapper style={{display: loading ? "none" : "flex"}}>
        {imageSlider[type].data[keys].product[idx].image.map((data, index) => (
            <ImgSrc key={index} src={data.file} onLoad={imageLoaded}/>
        ))}
      </ImgWrapper>
    </>
  );
  
};

export default Image;
