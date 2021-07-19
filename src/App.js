import React, { Component } from "react";
import { useState } from "react";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home";

function App() {
  const  [apartments, setApartments]  = useState([{id:1, net:120, room:4, extra:1, price:250.000, rent:false, situation:'Satılmadı'}]);
  const  [clients, setClients]  = useState([{ id: 1, name: "Yiğit Balceli", budget: 250.000, city: 'Mersin', situation: 'Arıyor'}]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home
              clients={clients}
              setClients={setClients}
              apartments={apartments}
              setApartments={setApartments}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
