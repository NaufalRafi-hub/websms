import React from 'react'
import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import Navbar from "./Navbar";

class FullpageWrapper extends React.Component {
    onLeave(origin, destination, direction) {
      console.log("Leaving section " + origin.index);
    }
    afterLoad(origin, destination, direction) {
      console.log("After load: " + destination.index);
    }
    render() {
      return (
        <Navbar />
        <ReactFullpage
          navigation={true}
          navigationColor ={['white']}
          scrollOverflow={true}
          sectionsColor={["orange","orange",]}
          onLeave={this.onLeave.bind(this)}
          afterLoad={this.afterLoad.bind(this)}
          render={({ state, fullpageApi }) => {
            return (
              
              <div id="fullpage-wrapper">
                <Navbar />
                <div className="section section1">
                
                  <h3>Section 1</h3>
                </div>
                <div className="section">
                  <div className="slide">
                    <h3>Slide 2.1</h3>
                  </div>
                  <div className="slide">
                    <h3>Slide 2.2</h3>
                  </div>
                  <div className="slide">
                    <h3>Slide 2.3</h3>
                  </div>
                </div>
                <div className="section">
                  <h3>Section 3</h3>
                  <button onClick={() => fullpageApi.moveTo(1, 0)}>
                    Move top
                  </button>
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