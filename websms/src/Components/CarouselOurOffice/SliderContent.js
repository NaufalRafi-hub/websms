import React from 'react';

//buat passing data dari imageSlider ditaroh di dalem bracket
const SliderContent = ({ activeIndex, imageSlider}) => {
  return (
    <section>
      {imageSlider.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? 'slides2 active2' : 'inactive2'}>
          <div className='detail-wrap2'>
            <img src={slide.name} alt='' className='slide-image2' />
            <div className='quotes'>
              <h2 className='slide-title2'>
                <hr />
                <span>{slide.title}</span>
              </h2>
              
              <h1>{slide.quotes}</h1>
            </div>
          </div>
        </div>
      ))}
      <div></div>
    </section>
  );
};

export default SliderContent;
