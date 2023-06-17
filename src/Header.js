import React from "react";
import "./Header.css";

const Header = () => {
  const name = "CYF HOTEL LTD"
    return (
        <header className="App-header">
          <div>
          <img className="hotel-logo"
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=60"
            alt="Logo" width={200} height={200}></img></div>
            <div><h2>{name}</h2></div>
        </header>
     
    );
}

export default Header;

