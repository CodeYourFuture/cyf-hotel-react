import React, { Component } from "react";

import Bookings from "./containers/Bookings.js";
//import Footer from './components/Footer.js';
import Logo from "./components/Logo.js";
import BookingsMessage from "./components/BookingsMessage.js";
import SpecialDeals from "./components/SpecialDeals.js";
import Name from "./components/Name.js";
import "./App.css";
import Counter from "./components/Counter.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <logo className="App-header">Wellcome To CYF Hotel</logo>

        <img
          className="Cfy-image"
          src="https://codeyourfuture.io/static/media/cyf_brand.fbcea877.png"
        />
        {/* <p>{new Date().toLocaleDateString()} </p> */}
        {/* <BookingsMessage /> */}
        <p> </p>
        <p>'There are bokin abailable on ' + {new Date().getFullYear()}</p>

        <Bookings />

        {/*<Logo />*/}
        <SpecialDeals />
        <BookingsMessage />
        <Name />
        <Counter buttonName="Click me" />
      </div>
    );
  }
}

export default App;
