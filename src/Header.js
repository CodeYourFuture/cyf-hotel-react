import React from "react";
import Logo from "./images/CYF_HOTEL_LOGO.png";
const Header = () => {
  //   return <header className="App-header">CYF Hotel</header>;
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ height: "80px" }}
    >
      <a class="navbar-brand" href="/#">
        <img src={Logo} style={{ width: "80px" }} alt="Hotel Logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
