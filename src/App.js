import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import "./App.css";
import TouristInfoCards from "./TouristInfoCards";
import SearchResults from "./SearchResults";
import data from "./data/fakeBookings.json";
import Footer from "./footer";
import Restaurant from "./Restaurant";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />

      {/* ----------This is table----------  */}

      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Titke</th>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Email</th>
            <th scope="col">Room</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
          </tr>
        </thead>
      </table>

      {data.map((item) => (
        <SearchResults
          key={item.id}
          id={item.id}
          title={item.title}
          firstName={item.firstName}
          surname={item.surname}
          email={item.email}
          roomId={item.roomId}
          checkInDate={item.checkInDate}
          checkOutDate={item.checkOutDate}
        />
      ))}

      {/*------- Footer -------*/}

      <Footer
        address={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789",
        ]}
      />
    </div>
  );
};

export default App;
