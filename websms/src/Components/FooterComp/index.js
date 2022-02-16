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
            <Nav to="/">Beranda</Nav>
            <Nav to="/#2">Tentang Kami</Nav>
            <Nav to="/#3">Layanan</Nav>
            <Nav to="/#4">Produk Kami</Nav>
            <Nav to="/#5">Lacak Pesanan</Nav>
            <Nav to="/#6">Kontak Kami</Nav>
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
