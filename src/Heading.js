import React from "react";
import Clock from "./Clock";
function Heading (){
    return (
      <div>
        <header className="App-header">
          CYF hotel
          <img
            className="App-logo"
            src="https://i.postimg.cc/hv8F36Zd/jason-briscoe-104289-unsplash.jpg"
            alt="logo"
          />
        </header>
        <Clock />
      </div>
    );
};



export default Heading;