import styled from "styled-components";

export const WrapperOW = styled.div`
  display: block;
  margin-top: 120px;
`;
export const WrapperFirstHeader = styled.div`
  display: grid;
  grid-template-columns: auto 40%;
  grid-template-areas: "head desc";
  padding-bottom: 15%;

`;
export const DivHeadline = styled.div`
  grid-area: desc;
  justify-content: flex-end;
  display: flex;
`;
export const DivDesc = styled.div`
  display: block;
  margin-top: 8%;
`;
export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 5%;
  width: min(45%, 27em);
  
`;
export const DivHead = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ImgWrapper = styled.div`

`
export const SecHeadline = styled.h2`
  font-family: "Viga", sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: #24275c;
`;
export const Headline = styled.h2`
  grid-area: head;
  font-family: "Viga", sans-serif;
  font-weight: bold;
  font-size: 20px;
`;
export const Desc = styled.h3`
  font-family: "Open Sans", sans-serif;
  text-align: justify;
  text-justify: auto;
  line-height: 1.4;
  font-size: 15px;
`;
