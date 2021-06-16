import styled from "styled-components";
import { motion } from 'framer-motion';

export const Bgwrapper = styled.div `
margin-top: 500px;
background: #24275C;
padding: 160px;
`
export const Txtwrapper = styled.div`
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
`

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
