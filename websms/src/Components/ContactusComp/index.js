import React from "react";
import "./ContactusComp.css";
import { Icon, EmailIcon, WAIcon } from "./ContactusComp";
import {Row} from "react-bootstrap"
// import { Map, GoogleApiWrapper } from 'google-maps-react';

const ContactusComp = () => {
  return (
    <div>
      <div className="side-contact">
        <h1>Contact Us</h1>
        <div className="side-contact-2">
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
            <div className="line-contact"></div>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ContactusComp;
