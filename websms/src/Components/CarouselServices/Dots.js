import React from 'react';

const Dots = ({ activeIndex, onClick, imageSlider }) => {
  return (
    <div className='all-dots1'>
      {imageSlider.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? 'dot1 active-dot1' : 'dot1'}`}
          onClick={() => onClick(index)}></span>
      ))}
    </div>
  );
};

export default Dots;
