import React, {useEffect} from "react";
import imageSlider from "../Carousel/imageSlider";
import { useParams } from "react-router-dom";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  SubHead,
  ImgWrapper,
} from "./ContentOWElements";
import Image from "./Image";


const ContentOW = () => {
  const { idPT, key, type } = new useParams();
  const controls = useAnimation();
  const { ref, inView } = useInView();
 

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    // if (!inView) {
    //   controls.start("hidden");
    // }
  }, [controls, inView]);

  const prodVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      // transition: {
      //   duration: 1,
      // },
    },
  };

  

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
            <WrapperContent
              key={index}
              ref={ref}
              initial="hidden"
              animate="visible"
              variants={prodVariants}
              transition={{ duration: 0.7 }}
            >
              <LineBottom></LineBottom>
              <SecHeadline>{data.prod}</SecHeadline>
              <SubHead>{data.name}</SubHead>
              <DivDesc>
                <Desc>{data.desc}</Desc>
              </DivDesc>
              <Image type={type} keys={key} idx={index} />
            </WrapperContent>
          ))}
        </WrapperOW>
       
    </div>
  );
};

export default ContentOW;
