import styled from "styled-components";
import { motion } from "framer-motion";

export const Headline = styled(motion.h1)`
  margin-top: 190px;
  font-size: 4.5rem;
  font-family: "Viga", sans-serif;
  color: #ffcc33;
  font-weight: bold;
  text-align: center;
  @media screen and (max-width:770px) {
    // padding: 10%;
    font-size: 3.5rem;
  }
  @media screen and (max-width:380px) {
    padding: 10%;
    font-size: 3.2rem;
  }
`;
