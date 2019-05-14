import React from "react";
import Clock from "./Clock";


const Heading = () => {
  return (
    <div className="header">
      <img
        className="logo-header"
        src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fbestcreativity.com%2Fblog%2Fwp-content%2Fuploads%2F2012%2F06%2Fhotel-logo-6.png"
      />
      <header className="App-header">CYF Hotel</header>
      <Clock/>
    </div>
  );
};

export default Heading;
