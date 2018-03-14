
import React from "react";

const Header = () => (
  <div>
    <nav className="App-header sticky-top py-1">
      <div className="container d-flex flex-column flex-md-row justify-content-between">
        <a className="py-2" >
          CYF Hotel
    </a>
        <a className="py-2 d-none d-md-inline-block" href="/customers">Customers</a>
        <a className="py-2 d-none d-md-inline-block" href="/invoices">invoices</a>
        <a className="py-2 d-none d-md-inline-block" href="/reservations">reservations</a>
        <a className="py-2 d-none d-md-inline-block" href="/rooms">rooms</a>
      </div>
    </nav>
  </div>
);

export default Header;







