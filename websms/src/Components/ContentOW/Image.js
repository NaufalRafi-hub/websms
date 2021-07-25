import React from "react";
import imageSlider from "../Carousel/imageSlider";
import { ImgWrapper } from "./ContentOWElements";

const Image = ({type, keys, idx}) => {
  console.log("type " + type);
  console.log("key " + keys);
  console.log("idx " + idx);
  return (
    <>
        {imageSlider[type].data[keys].product[idx].image.map((data, index) => (
          <ImgWrapper key={index}>
            <img src={data.file} alt='' className='prod' width="40%"/>
          </ImgWrapper>
        ))}
    </>
  );
};
//  {imageSlider[0].data[0].product.map((data, index) => (
//         <div key={index}>
//           <h1>{data.name}</h1>
//           <h2>{data.desc}</h2>
//         </div>
//       ))}
export default Image;
