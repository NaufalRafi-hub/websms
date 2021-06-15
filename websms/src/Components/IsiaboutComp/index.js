import React, { useEffect } from "react";
import { Txtwrapper, Headline, Desc } from "./IsiaboutComp";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const IsiaboutComp = ({ headline, description }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const aboutVariants = {
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
    <>
      <div className="container">
        <Txtwrapper>
          <Headline
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={aboutVariants}
          transition={{ duration: 0.7}}>
            {headline}
          </Headline>
          <Desc
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={aboutVariants}
          transition={{ duration: 1}}>
            {description}
          </Desc>
        </Txtwrapper>
      </div>
    </>
  );
};

export default IsiaboutComp;
