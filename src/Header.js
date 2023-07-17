import React from "react";
// import "./Header.css";

const Header = () => {
  // const logo = <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=60"></img>

  return (
    <header className="App-header">
      <div>
        <h1><span className="span">CYF</span><span className="span2">HOTEL LTD</span></h1>
        {/* <img src={logo} width="350" height="350" /> */}

        {/* <img
          className="hotel-logo"
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=60"
          height={200} width={350}
        ></img> */}
      </div>
    </header>
  );
};

export default Header;
