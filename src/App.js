import React, { Component } from 'react';
import { useState } from 'react';
import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './App.css';
import Header from './components/Header/Header.js';





function App() {


    return (

        <div className="App">
            <Header />
        </div>




    );
}

export default App;