import React, { useEffect } from "react";
import {
  Bgwrapper,
  Txtwrapper,
  Headline,
  Subhead,
  Desc,
  ExpDiv,
  ColExpFolder,
  ColExpClient,
  ColExpClock,
  FolderIcon,
  ClientIcon,
  ClockIcon,
  Desc2,
} from "./IsiaboutComp";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const IsiaboutComp = () => {
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

  const aboutVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <>
      <Bgwrapper
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={aboutVariants}
        transition={{ duration: 0.7 }}
      >
        <Headline>Kenapa Kami?</Headline>
        <Txtwrapper>
          <Subhead whileHover={{ scale: 1.1 }}>Visi</Subhead>
          <Desc>
            Layanan<b> integrated marketing communications</b> yang prima dengan
            konsep layanan <b>one stop service </b>dalam satu atap.
          </Desc>
          <Subhead whileHover={{ scale: 1.1 }}>Cara Kerja Kami</Subhead>
          <Desc>
            <b>Membantu</b> produsen / brand dalam{" "}
            <b>setiap program marketing communication</b> <br />
            <br />
            <b>Memberikan nilai lebih</b> dalam setiap layanan <br />
            <br />
            Menjadi <b>solusi terbaik</b> bagi produsen/brand dalam{" "}
            <b>memenuhi semua kebutuhan</b> program marketing communication-nya{" "}
            <br />
            <br />
            Menjadi <b>partner profesional</b> terpercaya dengan mengedepankan{" "}
            <b>layanan yang prima</b> dan <b>kepuasan pelanggan</b>
          </Desc>
        </Txtwrapper>
        <Subhead whileHover={{ scale: 1.1 }}>Pengalaman</Subhead>
        <ExpDiv>
          <ColExpFolder>
            <FolderIcon />
            <Subhead>1000+</Subhead>
            <Desc2>Proyek</Desc2>
          </ColExpFolder>
          <ColExpClient>
            <ClientIcon />
            <Subhead>500+</Subhead>
            <Desc2>klien</Desc2>
          </ColExpClient>
          <ColExpClock>
            <ClockIcon />
            <Subhead>1000+ Jam</Subhead>
            <Desc2>Waktu Kerja</Desc2>
          </ColExpClock>
        </ExpDiv>
      </Bgwrapper>
    </>
  );
};

export default IsiaboutComp;
