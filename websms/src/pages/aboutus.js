import React from "react";
import HeadlineAbtComp from "../Components/HeadlineAbtComp";
import IsiaboutComp from "../Components/IsiaboutComp";
import HeroAboutComp from "../Components/HeroAboutComp";
import { secOne, secThree } from "../Components/HeroAboutComp/Data";
import OurOfficeAbtComp from "../Components/OurOfficeAbtComp";
import FooterComp from "../Components/FooterComp";

const aboutus = () => {
  return (
    <>
      <HeadlineAbtComp />
      <HeroAboutComp {...secOne} />
      {/* <HeroAbout2Comp /> */}
      <HeroAboutComp {...secThree} />
      <IsiaboutComp />
      <OurOfficeAbtComp />
      <FooterComp />
    </>
  );
};

export default aboutus;
