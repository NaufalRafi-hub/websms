import React from "react";
import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles-home.css";
import Navbar from "../Components/Navbar/Navbar";
import HomeComp from "../Components/HomeComp/HomeComp";

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
        <Navbar />
        <ReactFullpage
          navigation={true}
          navigationColor={["white"]}
          scrollOverflow={true}
          sectionsColor={["white", "orange"]}
          onLeave={this.onLeave.bind(this)}
          afterLoad={this.afterLoad.bind(this)}
          render={({ state, fullpageApi }) => {
            return (
              <>
                <div id="fullpage-wrapper">
                  {/* <Navbar /> */}
                  <div className="section section1">
                    <HomeComp />
                  </div>
                  <div className="section">
                    <h3>About Us</h3>
                  </div>
                  <div className="section">
                    <h3>Services</h3>
                  </div>
                  <div className="section">
                    <h3>Our Work</h3>
                  </div>
                  <div className="section">
                    <h3>Track Order</h3>
                  </div>
                  <div className="section">
                    <h3>Contact Us</h3>
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
