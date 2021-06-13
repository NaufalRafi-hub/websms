import styled from 'styled-components'
import {HiOutlineMail} from 'react-icons/hi'
import {FaWhatsapp} from 'react-icons/fa'

export const Icon = styled.div`
    padding-top: 10px;
    display: flex;
    background: transparent;
    // border: transparent;
    font-size: 3rem;
    // cursor: pointer;
    outline: none;
    // padding0-
    gap: 10px;
    padding-left: 10px;
    padding-right: 20px;
`
export const EmailIcon = styled(HiOutlineMail)`
    color: #24275C;
    cursor: pointer;
`

export const WAIcon = styled(FaWhatsapp)`
    color: #24275C;
    cursor: pointer;
`
