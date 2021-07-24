import styled from "styled-components";
import { motion } from "framer-motion"

export const WrapperOW = styled.div`
  display: block;
  margin-top: 120px;
`;
export const WrapperFirstHeader = styled.div`
  display: grid;
  grid-template-columns: auto 40%;
  grid-template-areas: "head desc";
  padding-bottom: 120px;

`;
export const DivHeadline = styled.div`
  grid-area: desc;
  justify-content: flex-end;
  display: flex;
`;
export const DivDesc = styled.div`
  display: block;
  margin-top: 20px;
  grid-area: desc;
  margin-left: 60px;
`;
export const WrapperContent = styled.div`
  // display: flex;
  // flex-direction: column;
  display: grid;
  grid-template-columns: auto 2fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:  "line head" 
                        "sub sub"
                        "desc desc";
  padding-bottom: 80px;
  width: min(50%, 27em);
  
`;
export const DivHead = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ImgWrapper = styled.div`

`
export const SecHeadline = styled.h2`
  grid-area: head;
  font-family: "Viga", sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: #24275c;
  margin-left: 10px;
  align-items: center;
`;
export const SubHead = styled(motion.h2)`
  grid-area: sub;
  font-family: "Viga", sans-serif;
  font-weight: bold;
  font-size: 30px;
  color: #24275c;
  margin-left: 60px;
  margin-top: 10px;
  text-transform: uppercase;
  align-items: center;
`;
export const Headline = styled.h2`
  grid-area: head;
  font-family: "Viga", sans-serif;
  font-weight: bold;
  font-size: 20px;
`;
export const Desc = styled(motion.h3)`
  font-family: "Open Sans", sans-serif;
  text-align: justify;
  text-justify: auto;
  line-height: 1.4;
  font-size: 15px;
`;

export const LineBottom = styled.div`
  grid-area: line;
  border-top: 2px solid #24275c;
  padding-left: 50px;
  margin-top: 10px;
  // @media (max-width: 1024px) {
  //   margin-top: 8px;

  // }
`;
