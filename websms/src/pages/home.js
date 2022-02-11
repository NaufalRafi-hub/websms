import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles-home.css";
import HomeComp from "../Components/HomeComp";
import AboutusComp from "../Components/AboutusComp";
import ServicesComp from "../Components/ServicesComp";
import TrackorderComp from "../Components/TrackorderComp";
import ContactusComp from "../Components/ContactusComp";
import OurWorkComp from "../Components/OurWorkComp";
import {
  MapContainer,
  LayersControl,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import ReactLeafletGoogleLayer from "react-leaflet-google-layer";

const home = () => {
  {
    return (
      <>
        <div className="section section1" data-anchor="page1">
          <HomeComp />
        </div>
        <div className="section section2" data-anchor="page2">
          <AboutusComp />
        </div>
        <div className="container section section3" data-anchor="page3">
          <ServicesComp />
        </div>
        <div className="container section" data-anchor="page4">
          <OurWorkComp />
        </div>
        <div className="container section" data-anchor="page5">
          <TrackorderComp />
        </div>
        <div className="section" data-anchor="page6">
          <div className="section6">
            <ContactusComp />
            <div></div>
            <MapContainer
              center={[-6.305261349820201, 106.71880508213948]}
              zoom={15}
              scrollWheelZoom={true}
              dragging={true}
            >
              <LayersControl
                position="topleft"
                collapsed={false}
                className="layers-control"
              >
                <LayersControl.BaseLayer checked name="Map">
                  <ReactLeafletGoogleLayer
                    apiKey="AIzaSyCMczhWPxQsV9MUqyA7touty4CqI8kc0ZI"
                    type={"roadmap"}
                  />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer name="Satelit">
                  <ReactLeafletGoogleLayer
                    apiKey="AIzaSyCMczhWPxQsV9MUqyA7touty4CqI8kc0ZI"
                    type={"hybrid"}
                  />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer name="OSM">
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                </LayersControl.BaseLayer>
              </LayersControl>
              <Marker position={[-6.305261349820201, 106.71880508213948]}>
                <Popup>
                  Sinar Media Sakti Adv.
                  <br />
                  Jl. Aria Putra No.8, Serua Indah, Tangerang, Kota Tangerang
                  Selatan, Banten 15414
                  <br />
                  <a
                    href="https://www.google.com/maps/place/Sinar+Media+Sakti+Adv./@-6.305328,106.7188024,15z/data=!4m12!1m6!3m5!1s0x0:0x255275b0a3914694!2sSinar+Media+Sakti+Adv.!8m2!3d-6.3053294!4d106.7188105!3m4!1s0x0:0x255275b0a3914694!8m2!3d-6.3053294!4d106.7188105"
                    style={{ textDecoration: "none" }}
                    target="_tab"
                  >
                    Google Map
                  </a>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </>
    );
  }
};

export default home;

// ReactDOM.render(
//   <FullpageWrapper />,

//   document.getElementById('root')
// );

// export default FullpageWrapper;
