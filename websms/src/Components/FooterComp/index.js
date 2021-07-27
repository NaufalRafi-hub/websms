import React from "react";
import {
  Bgwrapper,
  Logo,
  ContactDiv,
  EmailIcon,
  LogoDiv,
  Nav,
  NavDiv,
  WAIcon,
  BottomDiv,
  Copyright,
  BlockWrapper,
  CopyIcon,
  BottomWrapper,
  LineBottom,
} from "./FooterElements";

const FooterComp = () => {
  return (
    <div className="fluid">
      <Bgwrapper>
        <BlockWrapper>
          <LogoDiv>
            <Logo to="/">SMS</Logo>
          </LogoDiv>
          <NavDiv>
            <Nav to="/">Home</Nav>
            <Nav to="/#2">About Us</Nav>
            <Nav to="/#3">Services</Nav>
            <Nav to="/#4">Our Work</Nav>
            <Nav to="/#5">Track Order</Nav>
            <Nav to="/#6">Contact Us</Nav>
          </NavDiv>

          <ContactDiv>
            <EmailIcon />
            <WAIcon />
          </ContactDiv>
          <BottomDiv>
            <BottomWrapper>
              <LineBottom></LineBottom>
              <CopyIcon />
              <Copyright>Copyright SMS Design 2021</Copyright>
            </BottomWrapper>
          </BottomDiv>
        </BlockWrapper>
      </Bgwrapper>
    </div>
  );
};

export default FooterComp;
