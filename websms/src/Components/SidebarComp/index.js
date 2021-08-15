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
        <SidebarLink to="/">Beranda</SidebarLink>
        <SidebarLink to="/#page2">Tentang Kami</SidebarLink>
        <SidebarLink to="/#page3">Layanan</SidebarLink>
        <SidebarLink to="/#page4">Produk Kami</SidebarLink>
        <SidebarLink to="/#page5">Lacak Pesanan</SidebarLink>
        <SidebarLink to="/#page6">Kontak Kami</SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default SidebarComp;
