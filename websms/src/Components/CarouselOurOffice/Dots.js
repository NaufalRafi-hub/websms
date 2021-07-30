import React from 'react';

const Dots = ({ activeIndex, onClick, imageSlider }) => {
  return (
    <div className='all-dots2'>
      {imageSlider.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? 'dot2 active-dot2' : 'dot2'}`}
          onClick={() => onClick(index)}></span>
      ))}
    </div>
  );
};

export default Dots;
