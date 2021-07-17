import React from 'react';

//buat passing data dari imageSlider ditaroh di dalem bracket
const SliderContent = ({ activeIndex, imageSlider }) => {
  return (
    <section>
      {/* ini untuk ngambil object array dan looping untuk tiap indexnya diliat */}
      {imageSlider.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? 'slides active' : 'inactive'}>
          <img src={slide.urls} alt='' className='slide-image' />
          <div className='detail-wrap'>
            <h2 className='slide-title'>
              <span>{slide.title}</span>
            </h2>
            <h3 className='slide-text'>{slide.description}</h3>
            <div className='logo'>
              <img src={slide.logo} alt='' className='logo' />
            </div>
          </div>
          <div className='detail-button'>
            <a href=''>See Detail</a>
            <hr />
          </div>
        </div>
      ))}
      <div></div>
    </section>
  );
};

export default SliderContent;