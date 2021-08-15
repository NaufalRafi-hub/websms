import React from "react";
import {
  SidebarLink,
  SidebarContainer,
  SidebarMenu,
  Icon,
  CloseIcon,
} from "./SidebarComp";

const SidebarComp = ({ isOpen, toggle }) => {
  
  return (
    <SidebarContainer
      isOpen={isOpen}
      onClick={toggle}
    >
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Beranda</SidebarLink>
        <SidebarLink to="/#2">Tentang Kami</SidebarLink>
        <SidebarLink to="/#3">Layanan</SidebarLink>
        <SidebarLink to="/#4">Produk Kami</SidebarLink>
        <SidebarLink to="/#5">Lacak Pesanan</SidebarLink>
        <SidebarLink to="/#6">Kontak Kami</SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default SidebarComp;
