import React, {useEffect} from "react";
import {
  Headline,
  Judulexp,
  Subexp,
  Subhead,
  Wrapperexp,
} from "./HeroExpertiseElements";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeroExpertiseComp = () => {
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

  const expVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0
    },
  };
  return (
    <div className="container">
      <Wrapperexp>
        <Judulexp>
          <Headline
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={expVariants}
            transition={{ duration: 0.7 }}
          >
            Keahlian Kami
          </Headline>
        </Judulexp>
        <Subexp>
          <Subhead
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={expVariants}
            transition={{ duration: 1 }}
          >
            Divisi offset, dan screen printing (percetakan dan sablon), <br />
            Divisi digital flash (percetakan digital), <br />
            Divisi trading (visualisasi produk keras), <br />
            Divisi outdoor production (produksi luarruang).
          </Subhead>
        </Subexp>
      </Wrapperexp>
    </div>
  );
};

export default HeroExpertiseComp;
