// npm import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Logo from "./Logo";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <Bookings />
      <Logo />
    </div>
  );
};

const CaughtPokemon = () => {
  let newDate = new Date().toLocaleDateString();
  return <p>Caught 0 Pokemon on {newDate}</p>;
};
export default App;
