import styled, {keyframes} from "styled-components";
// import url from "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;1,400&display=swap"

export const test = keyframes `
    100% {
        opacity: 1;
    }
`
export const Txtwrapper = styled.div`
  margin-top: 100px;
  margin-right: auto;
  margin-left: auto;
  width: min(90%, 33em);
  animation: ${test} 0.5s ease-out forwards;
  opacity: 0;
`;



export const Headline = styled.h1`
  font-size: 50px;
  font-family: "Viga", sans-serif;
  color: #ffcc33;
  font-weight: bold;
  text-align: center;
  align-items: center;
  animation: ${test} 0.7s ease-out 3s forwards;
`;

export const Desc = styled.h2`
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  text-align: justify;
  text-justify: auto;
  line-height: 1.7;
  padding-top: 70px;
`;
