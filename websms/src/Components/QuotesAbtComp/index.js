import React from 'react'
import CardQuotesComp from '../CardQuotesComp'
import { Headline } from './QuotesAbtElements'

const QuotesAbtComp = () => {
    return (
        <div className = "container">
            <Headline>Ulasan Klien</Headline>
            <CardQuotesComp />
        </div>
    )
}

export default QuotesAbtComp
