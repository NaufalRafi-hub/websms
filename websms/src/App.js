// import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import aboutus from "./pages/aboutus";
import Home from "./pages/home";
import Error from "./Components/ErrorPageComp";
import Navbar from "./Components/Navbar"
import SidebarComp from "./Components/SidebarComp"

function App() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isOpen: false
  //   };
  // }
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <Navbar toggle={toggle} />
      <SidebarComp
        isOpen={isOpen}
        toggle={toggle}
      />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/aboutus" component={aboutus} exact/>
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
