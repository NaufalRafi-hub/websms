import styled from "styled-components";
import { MdKeyboardBackspace } from 'react-icons/md';

export const BackIcon = styled(MdKeyboardBackspace)`
  color: #24275c;
  font-size: 3rem;
  // &:hover {
  //   color: #FFCC33;
  // }
  @media (max-width: 643px) {
    font-size: 2.3rem;

  }
  @media (max-width: 412px) {
    font-size: 1.6rem;

  }
  `

export const BackIconDiv = styled.div `
  background: transparent;
  border: transparent;
  // font-size: 2.2rem;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: flex-end;
  
`