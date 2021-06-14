import React from "react";
import {Txtwrapper, Headline, Desc } from './IsiaboutComp'

const IsiaboutComp = ({ headline, description }) => {
  return  (
    <>
        <div className="container">
            <Txtwrapper>
                <Headline>{headline}</Headline>
                <Desc>{description}</Desc>
            </Txtwrapper>
            
        </div>
    </>
  )
};

export default IsiaboutComp;
