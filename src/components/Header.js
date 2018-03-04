
import React from "react";

const Header = () => (
<nav class="App-header sticky-top py-1">
  <div class="container d-flex flex-column flex-md-row justify-content-between">
    <a class="py-2" >
      CYF Hotel
    </a>
    <a class="py-2 d-none d-md-inline-block" href="/customers">Customers</a>
    <a class="py-2 d-none d-md-inline-block" href="/invoices">invoices</a>
    <a class="py-2 d-none d-md-inline-block" href="/reservations">reservations</a>
    <a class="py-2 d-none d-md-inline-block" href="/rooms">rooms</a>
  </div>
</nav>
);

export default Header;







