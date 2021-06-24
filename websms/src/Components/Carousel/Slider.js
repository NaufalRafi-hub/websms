import React, { useEffect, useState } from 'react';
import SliderContent from './SliderContent';
import Arrow from './Arrow';
import Dots from './Dots';
import './slider.css';

const Slider = (imageSlider) => {
  const len = imageSlider.imageSlider.length - 1;
  const [activeIndex, setActiveIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [activeIndex]);

  // console.log(imageSlider.imageSlider);
  return (
    <div className='slider-container'>
      <SliderContent
        activeIndex={activeIndex}
        imageSlider={imageSlider.imageSlider}
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
        imageSlider={imageSlider.imageSlider}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
  // return <> </>;
};

export default Slider;
