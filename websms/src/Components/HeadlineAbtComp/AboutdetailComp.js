import styled from 'styled-components'
import { MdKeyboardBackspace } from 'react-icons/md';

export const BackIcon = styled(MdKeyboardBackspace)`
  color: #24275c;
  // width: 500;
  &:after {
   width: 40px;
  }
  `

export const BackIconDiv = styled.div `
  position: absolute;
  top: 20px;
  background: transparent;
  border: transparent;
  font-size: 2.2rem;
  cursor: pointer;
  outline: none;
  display: flex;
  text-decoration: none;
  &:after {
    font-size: 30px;
  }
`
