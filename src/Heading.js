import React from 'react';
import logo from "./image/logo.jpg"

const Heading = () => {
    return (
        <div>
             <header className="App-header">
                <h1>CYF Hotel</h1>
                <img className ="App-logo" src = {logo} alt = "logo"  />
             </header>
        </div>
    );
};

export default Heading;