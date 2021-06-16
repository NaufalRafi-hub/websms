import React from "react";
import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles-home.css";
import HomeComp from "../Components/HomeComp";
import AboutusComp from "../Components/AboutusComp";
import ServicesComp from "../Components/ServicesComp";
import TrackorderComp from "../Components/TrackorderComp";
import ContactusComp from "../Components/ContactusComp";

class FullpageWrapper extends React.Component {
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }
  render() {
    return (
      <>
        <ReactFullpage
          navigation={true}
          navigationColor={["white"]}
          scrollOverflow={true}
          sectionsColor={["white", "white"]}
          onLeave={this.onLeave.bind(this)}
          afterLoad={this.afterLoad.bind(this)}
          render={({ state, fullpageApi }) => {
            return (
              <>
                <div id="fullpage-wrapper">
                  <div className="section section1" data-anchor="page1">
                    <HomeComp />
                  </div>
                  <div className="section section2" data-anchor="page2">
                    <AboutusComp />
                  </div>
                  <div
                    className="container section section3"
                    data-anchor="page3"
                  >
                    <ServicesComp />
                  </div>
                  <div className="container section" data-anchor="page4">
                    <h3>Our Work</h3>
                  </div>
                  <div className="container section" data-anchor="page5">
                    <TrackorderComp />
                  </div>
                  <div className="container section" data-anchor="page6">
                    <ContactusComp />
                  </div>
                </div>
              </>
            );
          }}
        />
      </>
    );
  }
}

ReactDOM.render(
  <FullpageWrapper />,

  document.getElementById("root")
);

export default FullpageWrapper;
