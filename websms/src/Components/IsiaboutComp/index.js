import React, { useEffect } from "react";
import { Bgwrapper, Txtwrapper, Headline, Subhead,Desc } from "./IsiaboutComp";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const IsiaboutComp = () => {
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
      <div className="fluid">
        <Bgwrapper>
          <Headline>Why Us?</Headline>
          <Txtwrapper>
            <Subhead
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={aboutVariants}
              transition={{ duration: 0.7 }}
            >
              Vision
            </Subhead>
            <Desc
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={aboutVariants}
              transition={{ duration: 1 }}
            >
              Layanan<b> integrated marketing communications</b> yang prima dengan konsep layanan <b>one stop service </b>dalam satu atap.
            </Desc>
            <Subhead
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={aboutVariants}
              transition={{ duration: 0.7 }}
            >
              How We Work?
            </Subhead>
            <Desc
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={aboutVariants}
              transition={{ duration: 1 }}
            >
              Membantu produsen / brand dalam setiap program marketing communication <br />
              <br />Memberikan nilai lebih dalam setiap layanan <br />
              <br />Menjadi solusi terbaik bagi produsen/brand dalam memenuhi semua kebutuhan program marketing communication-nya <br/>
              <br />Menjadi partner profesional terpercaya dengan mengedepankan layanan yang prima dan kepuasan pelanggan
            </Desc>
            <Subhead
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={aboutVariants}
              transition={{ duration: 0.7 }}
            >
              Experiences
            </Subhead>
          </Txtwrapper>
        </Bgwrapper>
      </div>
    </>
  );
};

export default IsiaboutComp;
