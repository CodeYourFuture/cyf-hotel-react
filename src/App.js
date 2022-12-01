import React from "react";
import ReactDOM from "react";
import Heading from "./Heading";

import Search from "./Search";
import SearchButton from "./SearchButton";

import "./App.css";

const App = () => {
  return (
    <div>
      <Heading />

      <Search />
      <SearchButton />
    </div>
    // <div className="App">
    //   <header className="App-header">CYF Hotel</header>
    //   <Bookings />
    // </div>
  );
};

export default App;
