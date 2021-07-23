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
  LineBottom,
} from "./ContentOWElements";

const ContentOW = () => {
  const { idPT, key, type } = new useParams();

  return (
    <div className="container">
      <WrapperOW>
        {imageSlider[type].data
          .filter((data) => data.title === idPT)
          .map((item, key) => (
            <WrapperFirstHeader key={key}>
              <DivHead>
                <Headline>{item.title}</Headline>
              </DivHead>
              <DivHeadline>
                <Desc>{item.description}</Desc>
              </DivHeadline>
            </WrapperFirstHeader>
          ))}

        {imageSlider[type].data[key].product.map((data, index) => (
          <WrapperContent key={index}>
            <LineBottom></LineBottom>
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
