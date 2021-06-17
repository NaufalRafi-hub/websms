import React from 'react'
import { Bgwrapper, Logo, ContactDiv, EmailIcon, LogoDiv, Nav, NavDiv, WAIcon, BottomDiv, Copyright, BlockWrapper } from './FooterElements'

const FooterComp = () => {
    return (
        <div className="fluid">
            <Bgwrapper>
                <BlockWrapper>
                <LogoDiv>
                    <Logo>SMS</Logo>
                </LogoDiv>
                {/* </BlockWrapper>
                <BlockWrapper> */}
                <NavDiv>
                    <Nav>Home</Nav>
                    <Nav>About Us</Nav>
                    <Nav>Services</Nav>
                    <Nav>Our Work</Nav>
                    <Nav>Track Order</Nav>
                    <Nav>Contact Us</Nav>
                </NavDiv>
                {/* </BlockWrapper>
                <BlockWrapper> */}
                <ContactDiv>
                    <EmailIcon/>
                    <WAIcon />
                </ContactDiv>
                {/* <BottomDiv>
                    <Copyright>Copyright SMS Design 2021</Copyright>
                </BottomDiv> */}
                </BlockWrapper>
                <BottomDiv>
                    <Copyright>Copyright SMS Design</Copyright>
                </BottomDiv>
            </Bgwrapper>
        </div>
    )
}

export default FooterComp
