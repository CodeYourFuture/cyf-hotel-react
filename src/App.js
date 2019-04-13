import React, { Component } from "react";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Header from "./Heading";
import Footer from "./Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TouristInfoCards />
        <Bookings />
        <Restaurant />
        <Footer Communication= {["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"]}/>
      </div>
    );
  }
}

export default App;

/*
Create a <SearchResults /> component that shows hotel bookings in a <table> element. 
Each booking will have an id, title, first name, surname, email, room id, check in date and 
check out date. You can make up data to show in the table. 
Then show <SearchResults /> component within the <Bookings /> component that is provided for you. 
Be sure to split out your components into small well-named components, 
similar to the method used in exercise 1. 
Hint: You will find some useful <table> examples in the Bootstrap documentation for tables
*/