import styled from 'styled-components'
import {BsSearch} from 'react-icons/bs'

export const SearchIcon = styled(BsSearch)`
   color: #000;
   font-size: 64px;
   cursor: pointer;
   @media only screen and (max-width: 500px) and (min-width: 319px) {
      font-size: 40px;
  } 
   @media only screen and (max-width: 800px) and (min-width: 501px) {
      font-size: 50px;
   } 
`

