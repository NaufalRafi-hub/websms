import styled from "styled-components";
import { motion } from "framer-motion";

export const Headline = styled(motion.h1)`
  font-size: 4.5rem;
  font-family: "Viga", sans-serif;
  color: #ffcc33;
  font-weight: bold;
  text-align: center;
  @media screen and (max-width:998px) {
    // font-size: 3.5rem;
  }
  @media screen and (max-width:770px) {
    // padding: 10%;
    font-size: 3.5rem;
  }
  @media screen and (max-width:380px) {
    padding: 10%;
    font-size: 3.2rem;
  }
`;

export const Subhead = styled(motion.h2)`
  font-size: 1.3rem;
  font-family: "Open Sans", sans-serif;
  text-align: justify;
  text-justify: auto;
  line-height: 1.7;
  @media screen and (max-width:770px) {
    text-align: left;
  }
`;
