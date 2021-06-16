import React from "react";
import HeadlineAbtComp from "../Components/HeadlineAbtComp";
import IsiaboutComp from "../Components/IsiaboutComp";
import HeroAboutComp from "../Components/HeroAboutComp";
import { secOne, secThree } from "../Components/HeroAboutComp/Data";
import OurOfficeAbtComp from "../Components/OurOfficeAbtComp";

const aboutus = () => {
  return (
    <>
      <HeadlineAbtComp />
      <HeroAboutComp {...secOne} />
      {/* <HeroAbout2Comp /> */}
      <HeroAboutComp {...secThree} />
      <IsiaboutComp />
      <OurOfficeAbtComp />
    </>
  );
};

export default aboutus;
