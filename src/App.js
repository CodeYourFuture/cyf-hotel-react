import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";
import Bookings from "./Bookings";
import "./App.css";
import AddBookingItem from "./AddBookingItem";
import axios from "axios";

class App extends React.Component {
  state = {
    footerInfo: [
      "123 Fake Street, London, E1 4UD",
      "hello@fakehotel.com",
      "0123 456789"
    ],
    fakeBookings: [],
    loading: true
  };

  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/http://www.mocky.io/v2/5dab1c4c3100007e00bece6e"
      )
      .then(bookingInfo => {
        console.log(bookingInfo.data);
        this.setState({
          fakeBookings: bookingInfo.data,
          loading: false
        });
      });
    // .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Heading />
        <TouristInfoCards />
        {this.state.loading ? (
          <p>Data is loading</p>
        ) : (
          <Bookings fakeBookings={this.state.fakeBookings} />
        )}
        <Restaurant />
        <AddBookingItem />
        <Footer myArray={this.state.footerInfo} />
      </div>
    );
  }
}

export default App;
