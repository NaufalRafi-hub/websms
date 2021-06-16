import styled from 'styled-components'
import {HiOutlineMail} from 'react-icons/hi'
import {FaWhatsapp} from 'react-icons/fa'
import { NavLink as Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Bgwrapper = styled(motion.div)`
  background: #24275c;
  padding: 100px;
  display: flex;
`;

export const Logo = styled(motion.h1)`
font-size: 150px;
font-family: "Viga", sans-serif;
color: white;
font-weight: bold;
`

export const Nav = styled(Link)`
  font-size: 23px;
  font-family: "Open Sans", sans-serif;
  text-align: justify;
  text-justify: auto;
  line-height: 1.7;
  color: white;
`;

export const Copyright = styled(motion.h2)`
font-size: 20px;
font-family: "Viga", sans-serif;
color: white;
font-weight: bold;
`

export const LogoDiv = styled(motion.div)`
    
`

export const NavDiv = styled(motion.div)`

`

export const ContactDiv = styled(motion.div)`
    display: flex;
`

export const bottomDiv = styled(motion.div)`
    display: flex;
    margin-left: 50%;
`

export const EmailIcon = styled(HiOutlineMail)`
    color: #24275C;
    cursor: pointer;
`

export const WAIcon = styled(FaWhatsapp)`
    color: #24275C;
    cursor: pointer;
`