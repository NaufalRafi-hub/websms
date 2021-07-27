import React, { useState, useEffect } from 'react';
import SliderContent from './SliderContent';
import Arrow from './Arrow';
import Dots from './Dots';
import './slider.css';

const Slider = ({imageSlider, parentIdx, optKey}) => {
  // console.log('parent ' + parentIdx)
  const len = imageSlider.length - 1;
  const [activeIndex, setActiveIndex] = useState(0);
  const [optName, setOptName] = useState("Display");
  
  if(optName != optKey) {
    setActiveIndex(0);
    setOptName(optKey);
  }
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [activeIndex]);
  // if (Index) {
  //   setActiveIndex(0)
  //   Index = false;
  // }
  return (
    <div className='slider-container'>
      <SliderContent
        activeIndex={activeIndex}
        imageSlider={imageSlider}
        parentIdx={parentIdx}
      />
      <Arrow
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        imageSlider={imageSlider}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
};

export default Slider;
