import styled from 'styled-components'
import { BsList } from "react-icons/bs";
import { NavLink as Link } from "react-router-dom";
export const NavWrap = styled.div`
  // background: white;
  background: ${({url}) => (url === "/aboutus" ? "white" : "transparent")};
  height: 80px;
  display: block;
  font-weight: 700;
  z-index: 998;
  top: 0;
  position: fixed;
  width: 100%;
  box-shadow: ${({url}) => (url === "/aboutus" ? "0px 3px 10px rgba(0, 0, 0, 0.25)" : "")};
`
export const Nav = styled.nav`
    display: flex;
`;

export const NavLink = styled(Link)`
    color: #24275c;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    margin-left: 50px;
    margin-top: 15px;
    outline: none;
    background: transparent;
    border: transparent;
    &:hover {
      text-decoration: none;
      outline: none;
      color: #ffcc33;
    }

    @media screen and (max-width:600px) and (min-width: 319px) {
        // position: fixed;
        // top: 18px;
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