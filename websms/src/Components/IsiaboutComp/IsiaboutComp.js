import styled from "styled-components";
import { motion } from "framer-motion";
import { IoFolderOpen } from "react-icons/io5";
import { BsFillClockFill, BsFillPeopleFill } from "react-icons/bs";

export const Bgwrapper = styled(motion.div)`
  margin-top: 500px;
  background: #24275c;
  padding: 160px;
`;
export const Txtwrapper = styled(motion.div)`
  margin-top: 160px;
  margin-right: auto;
  margin-left: auto;
  width: min(90%, 35em);
`;

export const Subhead = styled(motion.h1)`
  font-size: 50px;
  font-family: "Open Sans", sans-serif;
  color: white;
  font-weight: bold;
  text-align: center;
  align-items: center;
`;

export const Headline = styled(motion.h1)`
  font-size: 70px;
  font-family: "Viga", sans-serif;
  color: #ffcc33;
  font-weight: bold;
  text-align: center;
  align-items: center;
`;

export const Desc = styled(motion.h2)`
  font-size: 23px;
  font-family: "Open Sans", sans-serif;
  text-align: justify;
  text-justify: auto;
  line-height: 1.7;
  padding-top: 160px;
  color: white;
  padding-bottom: 160px;
`;

export const Desc2 = styled(motion.h2)`
  font-size: 23px;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  color: white;
  padding-bottom: 160px;
`;

export const ExpDiv = styled(motion.div)`
  margin-top: 160px;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  gap: 250px;
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
  font-size: 80px;
  margin-bottom: 30px;
`;

export const ClockIcon = styled(BsFillClockFill)`
  color: white;
  font-size: 80px;
  margin-bottom: 30px;
`;

export const ClientIcon = styled(BsFillPeopleFill)`
  color: white;
  font-size: 80px;
  margin-bottom: 30px;
`;
