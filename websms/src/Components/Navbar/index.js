import React from "react";
import { useLocation } from "react-router-dom";
import {
  NavWrap,
  Nav,
  NavIcon,
  NavLink,
  Bars
} from "./NavbarElements";


const Navbar = ({ toggle }) => {
  const location = useLocation()
  const loc = location.pathname
  return (
    <NavWrap url={loc}>
        <Nav>
          <NavLink to="/">SMS</NavLink>
          <NavIcon onClick={toggle}>
                <div className="justify-content-end">
                    <Bars />
                </div>
          </NavIcon>
        </Nav>
    </NavWrap>
  );
};

export default Navbar;
