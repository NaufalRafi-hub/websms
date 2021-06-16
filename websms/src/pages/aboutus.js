import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import { Navbar } from 'react-bootstrap'
import AboutdetailComp from "../Components/AboutdetailComp";
import SidebarComp from "../Components/SidebarComp";
import Navbar from "../Components/Navbar";
import {
  sectionOne,
  sectionTwo,
  sectionThree,
} from "../Components/IsiaboutComp/Data";
import IsiaboutComp from "../Components/IsiaboutComp";

const aboutus = () => {
  // const [isOpen, setIsOpen] = useState(false)

  // const toggle = () => {
  //   setIsOpen(!isOpen)
  // }
  return (
    <>
      {/* <Router>
                    <Navbar toggle={toggle}/>
                    <SidebarComp  isOpen={isOpen} toggle={toggle}/>
                  
            </Router> */}
      <AboutdetailComp />
        <IsiaboutComp {...sectionOne} />
        <IsiaboutComp {...sectionTwo} />
        <IsiaboutComp {...sectionThree} />
     
    </>
  );
};

export default aboutus;
