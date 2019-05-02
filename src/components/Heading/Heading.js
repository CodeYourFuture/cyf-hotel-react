import React, { Component } from "react";
import Clock from "../../Clock";

class Heading extends Component {
  render(){
    return(
      <div>
        <Clock />
        <img
          src="http://www.logospng.com/images/172/black-behance-icon-free-site-logo-icons-172906.png"
          height="50px"
        />
        <header className="App-header">CYF Hotel</header>
      </div>
    )
  }
}

export default Heading;
