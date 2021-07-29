import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: rows;
  padding: 3rem;
  overflow-x: scroll;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 350px;
  width: 400px;
  min-width: 250px;
  padding: 1.5rem;
  background: #f1f1f1;
  box-shadow: -14px 18px 20px rgba(0, 0, 0, 0.25);
  transition: .2s;
  &:hover {
      transform: translateY(-1rem);
  }
  &:hover~&{
      transform: translateX(130px);
  }
  &:not(:first-child){
      margin-left: -130px;
  }
`;

export const Quotes = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-size: 3ch;
`;
export const CardHeader = styled.div``;
export const CardBottom = styled.div`
  margin-top: 70%;
  display: grid;
  position: relative;
  grid-template-columns: 75px 1fr;
  grid-template-areas: "ava det"
//   align-items: flex-end;
`;
export const CardAvatar = styled.div`
  grid-area: ava;
`;
export const CardDetails = styled.div`
  grid-area: det;
  display: flex;
  flex-direction: column;
`;
export const Head = styled.div`
  grid-area: det;
  display: flex;
`;

export const Line = styled.hr`
    border: 1px solid #24275c;
    margin-top: 10px;
    padding-left: 20%;
    align-self: center;
    margin-right: 5%;
`
export const Name = styled.h2`
    font-family: "Viga", sans-serif;
    font-size: 2ch;
    // margin: 15px 0;
    display: flex;
    align-items: center;
    color: #24275c;
    // z-index: 10;
`
