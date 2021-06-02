import React from "react";
import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles-home.css";
import Navbar from "../Components/Navbar";
import HomeComp from "../Components/HomeComp/HomeComp";
import { BrowserRouter as Router, Route, Switch}  from 'react-router-dom';
import AboutusComp from "../Components/AboutusComp";

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
        {/* <Navbar /> */}
        <Router>
            <Switch>
                {/* <Navbar /> */}
                {/* <Route path="/" component={Navbar} exact/> */}
                <Route path="/" component={Navbar} exact/>
                {/* <Route path="/aboutus" component={SigninPage} exact/> */}
            </Switch>
        </Router>
        
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
                  {/* <Navbar /> */}
                  <div className="section section1">
                    <HomeComp />
                  </div>
                  <div className="section">
                    <AboutusComp />
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
