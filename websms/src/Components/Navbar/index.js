import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { NavLink as Link } from "react-router-dom";
import { BsList } from "react-icons/bs";

export const Nav = styled.nav`
    background: #24275c;
    height: 80px;
    display: flex;
    font-weight: 700;
    z-index: 998;
    position: fixed;
    

`;

export const NavLink = styled(Link)`
    color: #24275c;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    margin-left: 50px;
    position: fixed;
    top: 15px;
    outline: none;
    background: transparent;
    border: transparent;
    &:hover {
      text-decoration: none;
      outline: none;
      color: #ffcc33;
    }

    @media screen and (max-width:600px) and (min-width: 319px) {
        position: fixed;
        top: 18px;
        margin-left: 18px;
    }
`;

export const NavIcon = styled.div`
  position: fixed;
  top: 26px;
  right: 80px;
  cursor: pointer;
  color: #24275c;
    @media screen and (max-width:600px) and (min-width: 319px) {
        right: 25px;
    }
    &:hover {
      color: #ffcc33;
    }

`;

export const Bars = styled(BsList)`
  font-size: 2rem;

//   transform: translate(-50%, -15%);
`;


const Navbar = ({ toggle }) => {
  return (
    <div className="container-fluid">
        <Nav>
          <NavLink to="/">SMS</NavLink>
          <NavIcon onClick={toggle}>
                <div className="justify-content-end">
                    <Bars />
                </div>
          </NavIcon>
        </Nav>
    </div>
  );
};

export default Navbar;
