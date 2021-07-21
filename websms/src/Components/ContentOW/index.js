import React from "react";
import imageSlider from "../Carousel/imageSlider";

const ContentOW = () => {
  console.log(imageSlider);
  return (
    <>
        {/* {imageSlider[0].data[0].product.map((prod, index) => (
            <h1>{prod.name}</h1>
        ))} */}
        {/* test */}
      {imageSlider[0].data[0].product.map((data, index) => (
        <div key={index}>
          <h1>{data.title}</h1>
          <h2>{data.description}</h2>
        </div>
      ))}
    </>
  );
};

export default ContentOW;
