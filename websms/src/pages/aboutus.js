import React from "react";
import HeadlineAbtComp from "../Components/HeadlineAbtComp";
import IsiaboutComp from "../Components/IsiaboutComp";
import HeroAboutComp from "../Components/HeroAboutComp";
import { secOne, secThree } from "../Components/HeroAboutComp/Data";
import OurOfficeAbtComp from "../Components/OurOfficeAbtComp";
import FooterComp from "../Components/FooterComp";
import HeroExpertiseComp from "../Components/HeroExpertiseComp";
import QuotesAbtComp from "../Components/QuotesAbtComp";

const aboutus = () => {
  return (
    <>
      <HeadlineAbtComp />
      <HeroAboutComp {...secOne} />
      <HeroExpertiseComp />
      <HeroAboutComp {...secThree} />
      <IsiaboutComp />
      <OurOfficeAbtComp />
      <QuotesAbtComp />
      <FooterComp />
    </>
  );
};

export default aboutus;
