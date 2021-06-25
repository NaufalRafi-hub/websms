import React from 'react';
import './ContactusComp.css';
import { Icon, EmailIcon, WAIcon } from './ContactusComp';
import { Row } from 'react-bootstrap';
import {
  MapContainer,
  LayersControl,
  Marker,
  Popup,
  TileLayer,
} from 'react-leaflet';
// import { Map, GoogleApiWrapper } from 'google-maps-react';

const ContactusComp = () => {
  return (
    <div className='contact-us'>
      <div className='side-contact'>
        <h1>Contact Us</h1>
        <div className='side-contact-2'>
          <h2>
            Jl. Aria Putra No. 8 RT 01 / RW 06 <br />
            Kel. Sarua Indah, Kec. Ciputat, <br />
            Tangerang Selatan 15414 <br />
            <br />
            bagus.sms@gmail.com <br />
            sinarmediasakti.adv@gmail.com <br />
            baliho.sms@gmail.com <br />
            <br />
            Telp / Fax <br />
            021 - 74634075 / 021 - 74633530 <br />
          </h2>
          <Row>
            <Icon>
              <EmailIcon />
              <WAIcon />
              {/* <div className="line-contact">

            </div> */}
            </Icon>
            <div className='line-contact'></div>
          </Row>
        </div>
      </div>
      {/* <div className='map'>
        <MapContainer
          center={[-6.305261349820201, 106.71880508213948]}
          zoom={16}
          scrollWheelZoom={true}
          dragging={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={[-6.305261349820201, 106.71880508213948]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div> */}
    </div>
  );
};

export default ContactusComp;
