import React from 'react';

const SliderContent = ({ activeIndex, imageSlider }) => {
  return (
    <section>
      {imageSlider.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? 'slides active' : 'inactive'}>
          <img src={slide.urls} alt='' className='slide-image' />
          <div className='detail-wrap'>
            <h2 className='slide-title'>{slide.title}</h2>
            <h3 className='slide-text'>{slide.description}</h3>
            <div className='logo'>
              <img src={slide.logo} alt='' className='logo' />
            </div>
            <div className='detail-button'>
              <a href=''>See Detail</a>
              <hr />
            </div>
          </div>
        </div>
      ))}
      <div></div>
    </section>
  );
};

export default SliderContent;
