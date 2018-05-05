import React, { Component } from 'react';

import Bookings from './containers/Bookings.js';
import Footer from './components/Footer.js';
import Logo from './components/Logo.js';
import './App.css';
import SpecialDeals from './components/SpecialDeals.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Bookings />
        <SpecialDeals />
        <Footer />
      </div>
    );
  }
}

export default App;
