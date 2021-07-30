import styled from "styled-components";
import { motion } from "framer-motion";

export const Headline = styled(motion.h1)`
  margin-top: 190px;
  font-size: 4.5rem;
  font-family: "Viga", sans-serif;
  color: #ffcc33;
  font-weight: bold;
  text-align: center;
  margin-bottom: 90px;
  @media screen and (max-width:770px) {
    // padding: 10%;
    font-size: 3.5rem;
    margin-bottom: 60px;
  }
  @media screen and (max-width:426px) {
    // padding: 10%;
    margin-bottom: 30px;
  }
  @media screen and (max-width:380px) {
    padding: 10%;
    font-size: 3.2rem;
    margin-bottom: 10px;
  }
`;
