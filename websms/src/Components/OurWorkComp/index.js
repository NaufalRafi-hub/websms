import React from 'react';
import { useState, useEffect } from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import './OurWorkComp.css';
import Slider from '../Carousel/Slider';
import imageSlider from '../Carousel/imageSlider';

// const contentDefault = () => {
//   return imageSlider.filter((item) => item.option === 'display')[0].data;
// };

const OurWorkComp = () => {
  const [optKey, setOptKey] = useState('display');
  const [content, setContent] = useState([]);

  useEffect (() => {
    const defaultContent = imageSlider.filter((item) => item.option === optKey)[0].data;
    setContent(defaultContent);
  },[optKey])
  // const changeSelect = (opt) => {
  //   return imageSlider.filter((item) => item.option === opt)[0].data;
  // };

  const option = [
    {
      option: 'display',
      key: 1,
    },
    {
      option: 'sign',
      key: 2,
    },
    {
      option: 'booth',
      key: 3,
    },
    {
      option: 'branding',
      key: 4,
    },
  ];

  // console.log(content);

  return (
    <div className='wrapper'>
      <div className='title'>
        <h1>Our Work</h1>
      </div>
      <div className='aside'>
        <ul className='option'>
          <li></li>
          {option.map((item) => (
            <>
              <li
                key={item.key}
                onClick={() => {
                  setOptKey(item.option);
                }}>
                <hr className={optKey === item.option ? 'strip' : ''} />
                {item.option}
              </li>
            </>
          ))}
        </ul>
        <div className='mobile'>
          <select
            name='option'
            id='option'
            onChange={(e) => {
              setOptKey(e.target.value);
            }}
            className='select'>
            {option.map((item) => (
              <>
                <option value={item.option} key={item.key}>
                  {item.option}
                </option>
              </>
            ))}
          </select>
        </div>
      </div>
      <div className='carousel'>
        <Slider imageSlider={content} />
      </div>
    </div>
  );
};

export default OurWorkComp;
