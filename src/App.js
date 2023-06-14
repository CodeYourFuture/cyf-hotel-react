import React from "react";
import Bookings from "./Bookings";
import SearchButton from "./SearchButton";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <Bookings />
      <SearchButton />
    </div>
  );
};

export default App;
