import React from 'react'
import SliderClient from '../SliderClient'
import { Headline } from './ClientAbtElements'

const ClientAbtComp = () => {
    return (
        <div className="container">
            <Headline>Top Clients</Headline>
            <SliderClient />
        </div>
    )
}

export default ClientAbtComp
