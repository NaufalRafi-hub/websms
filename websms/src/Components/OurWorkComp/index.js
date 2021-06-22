import React from 'react';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './OurWorkComp.css';

const OurWorkComp = () => {
  const [optKey, setOptKey] = useState(1);

  const option = [
    {
      option: 'Display',
      key: 1,
    },
    {
      option: 'Sign',
      key: 2,
    },
    {
      option: 'Booth',
      key: 3,
    },
    {
      option: 'Branding',
      key: 4,
    },
  ];

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
                  setOptKey(item.key);
                }}>
                <hr className={optKey === item.key ? 'strip' : ''} />
                {item.option}
              </li>
            </>
          ))}
        </ul>
        <div></div>
      </div>
      <div className='carousel'>
        <h3>gambar</h3>
      </div>
    </div>
  );
};

export default OurWorkComp;
