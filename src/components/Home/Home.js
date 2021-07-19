import React from "react";
import "./Home.css";
import { useState } from "react";
import List from '../List/List.js';



export default function Home(props) {
  
  

  return (
    <div className="list-container">
      <div className="clients-wrapper">
        <h2>Clients</h2>
        <List isClient={true} items={props.clients}/>
      </div>
      <div className="appartments-wrapper">
        <h2>Apartments</h2>
        <List isApartment={true} items={props.apartments}/>
      </div>
    </div>
  );
}
