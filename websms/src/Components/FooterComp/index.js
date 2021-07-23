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
            <Logo>SMS</Logo>
          </LogoDiv>
          <NavDiv>
            <Nav>Home</Nav>
            <Nav>About Us</Nav>
            <Nav>Services</Nav>
            <Nav>Our Work</Nav>
            <Nav>Track Order</Nav>
            <Nav>Contact Us</Nav>
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
