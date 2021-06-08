import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {BsX} from 'react-icons/bs'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 50vw;
    height: 100%;
    background: #24275C;
    display: grid;
    align-items: center;
    top: 0;
    transition: 0.6s ease-in-out;
    right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};

    @media screen and (max-width: 400px) {
        width: 100%;
    }
`;

export const CloseIcon = styled(BsX)`
    color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    border: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align-items: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    transition: 0.3s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    
    &:hover {
        color: #FFCC33;
        transition: 0.3s ease-in-out;
        text-decoration: none;
    }
`;
