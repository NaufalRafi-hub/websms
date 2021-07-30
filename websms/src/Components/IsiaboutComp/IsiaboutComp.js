import styled from "styled-components";
import { motion } from "framer-motion";
import { IoFolderOpen } from "react-icons/io5";
import { BsFillClockFill, BsFillPeopleFill } from "react-icons/bs";

export const Bgwrapper = styled(motion.div)`
  margin-top: 20%;
  background: #24275c;
  padding: 16%;
`;
export const Txtwrapper = styled(motion.div)`
  margin-top: 160px;
  margin-right: auto;
  margin-left: auto;
  width: min(90%, 35em);
  @media screen and (max-width:620px){
    // width: min(100%, 100em);
  }
`;

export const Subhead = styled(motion.h1)`
  font-size: 3rem;
  font-family: "Open Sans", sans-serif;
  color: white;
  font-weight: bold;
  text-align: center;
  align-items: center;
  @media screen and (max-width:770px){
    font-size: 2.5rem;
  }
  
`;

export const Headline = styled(motion.h1)`
  font-size: 4.5rem;
  font-family: "Viga", sans-serif;
  color: #ffcc33;
  font-weight: bold;
  text-align: center;
  align-items: center;
  @media screen and (max-width:770px) {
    // padding: 10%;
    font-size: 3.5rem;
  }
  @media screen and (max-width:380px) {
    padding: 10%;
    font-size: 3.2rem;
  }
`;

export const Desc = styled(motion.h2)`
  font-size: 1.5rem;
  font-family: "Open Sans", sans-serif;
  text-align: justify;
  text-justify: auto;
  line-height: 1.7;
  padding-top: 160px;
  color: white;
  padding-bottom: 160px;
  @media screen and (max-width:770px){
    font-size: 1.4rem;
    text-align: left;
  }
  @media screen and (max-width:620px){
    font-size: 1.3rem;
  }
`;

export const Desc2 = styled(motion.h2)`
  font-size: 1.5rem;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  color: white;
  padding-bottom: 160px;
  @media screen and (max-width:770px){
    font-size: 1.3rem;
  }
`;

export const ExpDiv = styled(motion.div)`
  margin-top: 160px;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  gap: 30%;
  @media screen and (max-width:770px){
    gap: 20%
  }
  @media screen and (max-width:500px){
    flex-direction: column;
  }
`;

export const ColExpFolder = styled(motion.div)`
  display: block;
  text-align: center;
`;

export const ColExpClient = styled(motion.div)`
  display: block;
  text-align: center;
`;

export const ColExpClock = styled(motion.div)`
  display: block;
  text-align: center;
`;

export const FolderIcon = styled(IoFolderOpen)`
  color: white;
  font-size: 5rem;
  margin-bottom: 30px;
  @media screen and (max-width:770px){
    font-size: 4rem;
  }
  @media screen and (max-width:620px){
    font-size: 3rem;
  }
`;

export const ClockIcon = styled(BsFillClockFill)`
  color: white;
  font-size: 5rem;
  margin-bottom: 30px;
  @media screen and (max-width:770px){
    font-size: 4rem;
  }
  @media screen and (max-width:620px){
    font-size: 3rem;
  }
`;

export const ClientIcon = styled(BsFillPeopleFill)`
  color: white;
  font-size: 5rem;
  margin-bottom: 30px;
  @media screen and (max-width:770px){
    font-size: 4rem;
  }
  @media screen and (max-width:620px){
    font-size: 3rem;
  }
`;
