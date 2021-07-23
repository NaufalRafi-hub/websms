import styled from "styled-components";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp, FaRegCopyright } from "react-icons/fa";
// import { NavLink as Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Bgwrapper = styled(motion.div)`
  background: #24275c;
  padding: 100px;
  display: block;
`;

export const BlockWrapper = styled(motion.div)`
  display: grid;
  grid-template-rows: auto 80px;
  grid-template-columns: 40% auto 40%;
  grid-template-areas:  "logo nav btn"
                        "copy copy copy";
  // justify-content: center;
  align-items: center;
`;

export const Logo = styled(motion.h1)`
  font-size: 150px;
  font-family: "Viga", sans-serif;
  color: white;
  font-weight: bold;
  justify-content: center;
`;

export const Nav = styled(motion.h3)`
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
`;

export const LogoDiv = styled(motion.div)`
  grid-area: logo;
  display: flex;
  justify-content: flex-start;
`;

export const NavDiv = styled(motion.div)`
  display: block;
  grid-area: nav;
  margin-left: auto;
  margin-right: auto;
`;

export const ContactDiv = styled(motion.div)`
  display: flex;
  gap: 60px;
  grid-area: btn;
  justify-content: flex-end;
`;

export const BottomDiv = styled(motion.div)`
  margin-top: 30px;
  display: flex;
  grid-area: copy;
  justify-content: flex-end;
`;

export const BottomWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  width: 100%;
  // padding: 50px;
`;

export const LineBottom = styled.div`
  border-top: 2px solid white;
  padding-left: 80px;
  margin-top: 13px;
`;

export const EmailIcon = styled(HiOutlineMail)`
  color: white;
  cursor: pointer;
  font-size: 80px;
`;

export const WAIcon = styled(FaWhatsapp)`
  color: white;
  cursor: pointer;
  font-size: 80px;
`;

export const CopyIcon = styled(FaRegCopyright)`
  color: white;
  font-size: 25px;
`;
