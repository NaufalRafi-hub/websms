import React from 'react'
import styled from 'styled-components'

export const Nav = styled.nav`
    background: transparent;
    opacity: 0.6;
    justify-content: center;
    font-weight: bold;
    font-color: #0000;
    position: absolute;
    top: 5px;
    z-index: 999;
    width: 100%;
    height : 75px;

`;

const Navbar = () => {
    return (
        <div className="container">
            <Nav>
                <h1>logo</h1>
            </Nav>
        </div>
        
    )
}

export default Navbar