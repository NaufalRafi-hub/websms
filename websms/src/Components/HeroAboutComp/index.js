import React, { useEffect } from "react";
import { Headline, Subhead } from "./HeroAboutElements";
import "./HeroAboutElements.css";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeroAboutComp = ({ headline, description }) => {
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

  const abtheadVariants = {
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
      <div className="wrapper-hero-abt">
        <div className="judul-hero-abt">
          <Headline
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={abtheadVariants}
            transition={{ duration: 0.7 }}
          >
            {headline}
          </Headline>
        </div>
        <div className="sub-hero-abt">
          <Subhead
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={abtheadVariants}
            transition={{ duration: 1 }}
          >
            {description}
          </Subhead>
        </div>
      </div>
    </div>
  );
};

export default HeroAboutComp;
