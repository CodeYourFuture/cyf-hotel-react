import React, {Component}from "react";
import Clock from "./Clock"
class Heading extends Component {
  render(){
  return (
    <div>
      <img
        src="https://i.postimg.cc/Y0rxLyfV/log.png"
        height="120px"
        alt="logo"
      />
      <header className="header">
        CYF Hotel
        <div>
          <Clock />
        </div>
      </header>
    </div>
  );
  }
};

export default  Heading; 
