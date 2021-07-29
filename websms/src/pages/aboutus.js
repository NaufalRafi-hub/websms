import React from "react";
import HeadlineAbtComp from "../Components/HeadlineAbtComp";
import IsiaboutComp from "../Components/IsiaboutComp";
import HeroAboutComp from "../Components/HeroAboutComp";
import { secOne, secThree } from "../Components/HeroAboutComp/Data";
import OurOfficeAbtComp from "../Components/OurOfficeAbtComp";
import FooterComp from "../Components/FooterComp";
import HeroExpertiseComp from "../Components/HeroExpertiseComp";
import QuotesAbtComp from "../Components/QuotesAbtComp";
import ClientAbtComp from "../Components/ClientAbtComp";

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
      <ClientAbtComp />
      <FooterComp />
    </>
  );
};

export default aboutus;
