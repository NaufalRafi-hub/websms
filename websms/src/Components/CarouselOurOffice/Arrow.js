import React from 'react';

const Arrow = ({ prevSlide, nextSlide }) => {
  return (
    <div className='arrows'>
      <span className='prev2' onClick={prevSlide}>
        &#10094;
      </span>
      <span className='next2' onClick={nextSlide}>
        &#10095;
      </span>
    </div>
  );
};

export default Arrow;
