import styled from "styled-components";
import { MdKeyboardBackspace } from "react-icons/md";

export const BackIcon = styled(MdKeyboardBackspace)`
  color: #24275c;
  font-size: 3rem;
  // &:hover {
  //   color: #FFCC33;
  // }
  @media screen and (max-width:415px) {
    font-size: 2.5rem;
    
  }
@media screen and (max-width:325px) {
   font-size: 2rem;
  
}
`;

export const BackIconDiv = styled.div`
  // position: absolute;
  // margin-top: 20px;
  background: transparent;
  border: transparent;
  // font-size: 2.2rem;
  cursor: pointer;
  outline: none;
  display: flex;
`;
