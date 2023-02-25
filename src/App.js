import React from "react";
import TouristInfoCards from "./TouristInfoCards";
import Heading from "./Heading";
import Bookings from "./Bookings";
import Footer from "./Footer";
import SearchResults from "./SearchResults";
import data from "./data/fakeBookings.json"
import moment from "moment";
import "./App.css";
import TableHeading from "./TableHeading";



const App = () => {
  const address = ["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"];
  return (
    <div className="App">
      <Heading/>
      <TouristInfoCards/>
      <Bookings/>

      <table class="table">
          <thead class="thead-dark">
            <TableHeading/>
          </thead>
        {data.map((client) => {
          let a = moment(client.checkInDate, "YYYY-MM-DD");
          let b = moment(client.checkOutDate, "YYYY-MM-DD");
          return((
          <SearchResults 
          id={client.id} 
          title={client.title} 
          firstName={client.firstName} 
          surname={client.surname} 
          email={client.email} 
          roomId={client.roomId} 
          checkInDate={client.checkInDate} 
          checkOutDate={client.checkOutDate} 
          numberOfNights={b.diff(a, "days")}
          />
        ))
        })}

 
      </table>

      <Footer address={address}/>
    </div>
  );
};

export default App;
