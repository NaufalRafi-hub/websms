import React from 'react'
import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'

export const Nav = styled.nav`
    background: transparent;
    font-weight: bold;
    font-color: #0000;
    position: absolute;
    top: 5px;
    z-index: 999;
    height : 80px;
    display: flex;
`;

export const NavLink = styled(Link)`
    color: #24275C;
    font-size: 2rem;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`;

export const NavIcon = styled.div `
    
    display: flex;
    cursor: pointer;
    color: #24275C;
    margin=right: -22px;
`;

export const Bars = styled(GiHamburgerMenu) `
    font-size: 2rem;
    margin=right: -22px;
`;

const Navbar = () => {
    return (
        <div className="container">
            <Nav>
                <NavLink to="/">logo</NavLink>
                <NavIcon>
                    <Bars />
                </NavIcon>
                {/* <h2>logo</h2> */}
            </Nav>
        </div>
        
    )
}

export default Navbar
