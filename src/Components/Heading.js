import React from 'react';
import logo from '../Logo.png';
import Clock from './Clock';
import './App.css';
const Heading = () => {
    return (
        <div >
            <div className="logo-container">
                <img className="App-logo" src={logo} />
                <Clock />
            </div>
            <header className="App-header App-title">CYF Hotel</header>
        </div>
    )
};


export default Heading;