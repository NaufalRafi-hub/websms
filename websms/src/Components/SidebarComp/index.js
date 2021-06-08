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
        <SidebarLink href="#page1">Home</SidebarLink>
        <SidebarLink href="#page2">About Us</SidebarLink>
        <SidebarLink href="#page3">Services</SidebarLink>
        <SidebarLink href="#page4">Our Work</SidebarLink>
        <SidebarLink href="#page5">Track Order</SidebarLink>
        <SidebarLink href="#page6">Contact Us</SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default SidebarComp;
