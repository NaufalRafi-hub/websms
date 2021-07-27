import React from 'react';
import { Link } from 'react-router-dom';

//buat passing data dari imageSlider ditaroh di dalem bracket
const SliderContent = ({ activeIndex, imageSlider, parentIdx }) => {
  console.log('parentSC' + parentIdx);
  return (
    <section>
      {/* ini untuk ngambil object array dan looping untuk tiap indexnya diliat */}
      {imageSlider.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? 'slides1 active1' : 'inactive1'}>
          <div className='detail-wrap1'>
            <h2 className='slide-title1'>
              <hr />
              <span>{slide.name}</span>
            </h2>
            <div className='text-wrapper'>
              <h3 className='slide-text1'>
                <span>{slide.description}</span>
              </h3>
            </div>
            <hr className='garis' />
            <div className='example'>
              <ul>
                {slide.example.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
      <div></div>
    </section>
  );
};

export default SliderContent;
