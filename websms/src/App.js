// import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import aboutus from "./pages/aboutus";
import Home from "./pages/home";
import ProductShowcase from "./pages/ProductShowcase"
import Error from "./Components/ErrorPageComp";
import Navbar from "./Components/Navbar";
import SidebarComp from "./Components/SidebarComp";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  //function to set isOpen to true when toggle is clicked
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <BrowserRouter>
      <Navbar toggle={toggle} />
      <SidebarComp isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/aboutus" component={aboutus} exact />
        <Route path="/product/:idPT" component={ProductShowcase} exact/>
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
