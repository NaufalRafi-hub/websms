// import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import aboutus from "./pages/aboutus";
import Home from "./pages/home";
import ProductShowcase from "./pages/ProductShowcase"
import Error from "./Components/ErrorPageComp";
import Navbar from "./Components/Navbar";
import SidebarComp from "./Components/SidebarComp";
import LoadingComp from "./Components/LoadingComp";
import Loading from "./images/loading.gif";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    }
  },[]);

  //function to set isOpen to true when toggle is clicked
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <> 
    {loading ? (
      <div>
        <img src={Loading} alts=""></img>
        {/* <h1>hai ngabers!!</h1> */}
      </div>
    ):(
      <BrowserRouter>
      <Navbar toggle={toggle} />
      <SidebarComp isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/aboutus" component={aboutus} exact />
        <Route path="/product/:idPT/:key/:type" component={ProductShowcase} exact/>
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
    )}
    </>
  );
}

export default App;
