import React from 'react'
import styled from 'styled-components'
import {Row, Col} from "react-bootstrap"
import {NavLink as Link} from 'react-router-dom'
import {BsList} from 'react-icons/bs'

export const Nav = styled.nav`
    background: transparent;
    font-weight: bold;
    font-color: #0000;
    position: absolute;
    z-index: 999;
    height : 80px;
    display: inline-block;
    top: 5px;
`;

export const NavLink = styled(Link)`
    margin-top: 10px;
    color: #24275C;
    font-size: 2rem;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 400px) {
        position: absolute;
    }
`;

export const NavIcon = styled.div `
    cursor: pointer;
    color: #24275C;
    display: inline-block;
`;

export const Bars = styled(BsList) `
    font-size: 2rem;
    margin-top: 5px;
`;

const Navbar = ({toggle}) => {
    return (
        <div className="container">
            <Row>
                <Col md={4}>
                    <Nav>
                        <NavLink to="/">SMS</NavLink>
                    </Nav>
                </Col>
                <Col className="container-fluid d-grid gap-2 d-md-flex justify-content-md-end">
                    <Nav>
                        <NavIcon onClick={toggle}>
                            <Bars />
                        </NavIcon>
                        {/* <h2>logo</h2> */}
                    </Nav>
                </Col>
            </Row>
        </div>
        
    )
}

export default Navbar
