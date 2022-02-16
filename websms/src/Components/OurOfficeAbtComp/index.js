import React from 'react'
import { Headline } from './OurOfficeAbtElements'
import SliderOF from '../CarouselOurOffice/SliderOF';
import Data from '../CarouselOurOffice/Data';


const OurOfficeAbtComp = () => {
    return (
        <div className = "container">
            <Headline>Kantor Kami</Headline>
            <SliderOF imageSlider={Data}/>
        </div>
    )
}

export default OurOfficeAbtComp
