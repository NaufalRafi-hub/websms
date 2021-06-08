import React , {useState} from "react";
import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles-home.css";
import Navbar from "../Components/Navbar";
import HomeComp from "../Components/HomeComp/HomeComp";
import { BrowserRouter as Router} from "react-router-dom";
import AboutusComp from "../Components/AboutusComp";
import ServicesComp from "../Components/ServicesComp";
import SidebarComp from "../Components/SidebarComp";

class FullpageWrapper extends React.Component {
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  render() {

    return (
      <>
            <Router>
                    <Navbar toggle = {() => this.setState({isOpen: true})}/>
                    <SidebarComp isOpen={this.state.isOpen} toggle = {() => this.setState({isOpen: false})}/>
                    {/* <Route path="/aboutus" component={SigninPage} exact/> */}
                  
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
                  <div className="section section1" data-anchor="page1">
                    <HomeComp />
                  </div>
                  <div className="section section2" data-anchor="page2">
                    <AboutusComp />
                  </div>
                  <div className="container section section3" data-anchor="page3">
                    <ServicesComp />
                  </div>
                  <div className="section" data-anchor="page4">
                    <h3>Our Work</h3>
                  </div>
                  <div className="section" data-anchor="page5">
                    <h3>Track Order</h3>
                  </div>
                  <div className="section" data-anchor="page6">
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
