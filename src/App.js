
import React, { useState } from "react";
import Footer from './Footer';
import Header from './header/index';
import Home from './sactionHome';
import Kontakt from './sectionKontakt';
import OurDeeds from './sectionOurDeeds';
import Services from './sectionServices';
import HeaderBurger from "./headerBurger";

import './style/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  const [onResizeBurger, setOnResizeBurger] = useState(null);
  const [onResizeMax, setOnResizeMax] = useState(null);
  window.onload = function () {
    if (window.innerWidth <= 770) {
      setOnResizeBurger(true);
      setOnResizeMax(false);
    } else {
      setOnResizeMax(true);
      setOnResizeBurger(false);
    }
  }

  window.onresize = function () {
    if (window.innerWidth <= 770) {
      setOnResizeBurger(true);
      setOnResizeMax(false);
    } else {
      setOnResizeMax(true);
      setOnResizeBurger(false);
    }
  }


  return (
    <Router >
      <div className="App">
        <div className="wrapper">
          {onResizeMax && <Header /> }
          {onResizeBurger && <HeaderBurger />}
          <Switch>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/ourdeeds">
              <OurDeeds />
            </Route>
            <Route path="/kontakt">
              <Kontakt />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
