import React from "react";
import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import Navbar from "./Components/Navbar";


class FullpageWrapper extends React.Component {
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }
  render() {
    return (
      <ReactFullpage
        navigation={true}
        navigationColor ={['white']}
        scrollOverflow={true}
        sectionsColor={["orange","orange",]}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
              // <Navbar />
              <div id="fullpage-wrapper">
                <Navbar />
                <div className="section section1">
                
                  <h3>Home</h3>
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
          );
        }}
      />
    );
  }
}

ReactDOM.render(
    
    <FullpageWrapper />, 
    
    document.getElementById("react-root")
    );

export default FullpageWrapper;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
