import React from 'react'
import styled from 'styled-components'

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justift-content: center;
    font-weight: bold;
    font-color: #0000;
    position: absolute;
    top: 0px;
    z-index: 999;
`;

const Navbar = () => {
    return (
            <Nav>
                <h1>logo</h1>
            </Nav>
    )
}

export default Navbar