import React from "react";
import "./App.css";
import HotelLogo from "./HotelLogo.png"

// const Logo = () => {
//   return (
//     <img src="https://image.flaticon.com/icons/svg/139/139899.svg" alt="Logo" />
//   );
// };

const Heading = () => {
  return (
    <header className="App-header">
      {/* <Logo /> */}
      {/* <header className="App-header">CYF Hotel</header> */}
      <img className="App-logo" src={HotelLogo} alt="Logo" />
      CYF Hotel
    </header>
  );
};

export default Heading;
