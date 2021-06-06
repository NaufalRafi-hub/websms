import React from "react";
import {
  SidebarLink,
  SidebarContainer,
  SidebarMenu,
  Icon,
  CloseIcon,
} from "./SidebarComp";

const SidebarComp = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Home</SidebarLink>
        <SidebarLink to="/">About US</SidebarLink>
        <SidebarLink to="/">Services</SidebarLink>
        <SidebarLink to="/">Our Work</SidebarLink>
        <SidebarLink to="/">Track Order</SidebarLink>
        <SidebarLink to="/">Contact Us</SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default SidebarComp;
