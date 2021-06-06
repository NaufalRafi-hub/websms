import React , {setState} from "react";
import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles-home.css";
import Navbar from "../Components/Navbar";
import HomeComp from "../Components/HomeComp/HomeComp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

  render() {
    const [isOpen, setIsOpen] = this.setState({isOpen: false});

    const toggle = () => {
      setIsOpen(!isOpen);
    }

    return (
      <>
        {/* <Navbar /> */}
        <Router>
          <Switch>
            <Navbar toggle={toggle} />
            <SidebarComp isOpen={isOpen} toggle={toggle}/>
            {/* <Route path="/" component={Navbar} exact/> */}
            {/* <Route path="/" component={Navbar toggle={toggle}} exact />
            <Route path="/" component={SidebarComp isOpen={isOpen} toggle={toggle}} exact /> */}
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
                  <div className="section section2">
                    <AboutusComp />
                  </div>
                  <div className="container section section3">
                    <ServicesComp />
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
