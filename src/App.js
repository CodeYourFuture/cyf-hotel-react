import React, { Component } from 'react';

import Heading from './Heading';
import TouristInfoCards from './TouristInfoCards';
import Bookings from './Bookings';
import Restaurant from './Restaurant';
import Footer from './Footer';
import './App.css';
import './grid.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Bookings />
        <Restaurant />
       <div className='row'>
        <TouristInfoCards
          image="https://i.postimg.cc/MH3GWqTW/London.jpg"
          city="London"
          link="https://www.visitlondon.com"
        />

        <TouristInfoCards
          image="https://i.postimg.cc/htTKY994/Manchester.jpg"
          city="Mancester"
          link="visitmanchester.com"
        />

        <TouristInfoCards
          image="https://i.postimg.cc/jC0PtQLx/Glasgow.jpg"
          city="Glasgow"
          link="https://peoplemakeglasgow.com/"
        />
   
        </div>
        
        <Footer array = {["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"]}
/>
       
      </div>
    );
  }
}

export default App;
