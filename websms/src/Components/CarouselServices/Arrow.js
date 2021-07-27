import React from 'react';

const Arrow = ({ prevSlide, nextSlide }) => {
  return (
    <div className='arrows'>
      <span className='prev1' onClick={prevSlide}>
        &#10094;
      </span>
      <span className='next1' onClick={nextSlide}>
        &#10095;
      </span>
    </div>
  );
};

export default Arrow;
