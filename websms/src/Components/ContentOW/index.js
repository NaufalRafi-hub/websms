import React, { useState, useEffect } from "react";
import imageSlider from "../Carousel/imageSlider";
import { useParams } from "react-router-dom";
import {
  SecHeadline,
  Desc,
  WrapperFirstHeader,
  Headline,
  WrapperContent,
  DivDesc,
  WrapperOW,
  DivHeadline,
  DivHead,
} from "./ContentOWElements";

const ContentOW = () => {
  const [content, setContent] = useState([]);
  const { idPT, key, type } = new useParams();

  // useEffect(() => {
  //   const defContent = imageSlider.filter((data) => data.data === {idPT})[0].data;
  //   setContent(defContent);
  // },[])
  console.log(content);
  return (
    <div className="container">
      <WrapperOW>
        {/* {imageSlider[type].data.map((item, key) => (
        <div key={key}>
          <h1>{item.title}</h1>
          <h2>{item.description}</h2>
        </div>
      ))} */}
        <WrapperFirstHeader>
          <DivHead>
            <Headline>{idPT}</Headline>
          </DivHead>
          <DivHeadline>
            <Desc>lorem ipsum dolor sit amet, consectetur adipis lorem ipsum dolor sit amet, consectetur adipis</Desc>
          </DivHeadline>
        </WrapperFirstHeader>

        {imageSlider[type].data[key].product.map((data, index) => (
          <WrapperContent key={index}>
            <SecHeadline>
              {data.prod} : {data.name}
            </SecHeadline>
            <DivDesc>
              <Desc>{data.desc}</Desc>
            </DivDesc>
          </WrapperContent>
        ))}
      </WrapperOW>
    </div>
  );
};

export default ContentOW;
