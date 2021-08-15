import styled from 'styled-components'
import {BsX} from 'react-icons/bs'
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";


export const SidebarContainer = styled(motion.aside)`
    position: fixed;
    z-index: 999;
    width: 50%;
    height: 100%;
    background: #24275C;
    display: grid;
    align-items: center;
    top: 0;
    // transition: 1s ease-in-out;
    right: ${({ isOpen }) => (isOpen ? '0' : '-10000px')};

    
    @media only screen and (max-width: 600px) and (min-width: 319px) {
        width: 100%;
    } 

`;

export const CloseIcon = styled(BsX)`
    color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.3rem;
    left: 2.3rem;
    background: transparent;
    border: transparent;
    font-size: 2.2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 50px);
    align-items: center;
    margin-right: auto;
    margin-left: auto;

    @media only screen and (max-width: 600px) and (min-width: 319px) {
        grid-template-rows: repeat(6, 40px);
    } 
    
`

export const SidebarLink = styled(NavLink)`
    
    display: flex;
    align-items: center;
    // text-align: left;
    // justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    transition: 0.1s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    
    &:hover {
        color: #FFCC33;
        // font-size: 2rem;
        transition: 0.1s ease-in-out;
        text-decoration: none;
    }
`;
