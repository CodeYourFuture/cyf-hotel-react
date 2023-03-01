// import React from "react";
import React, {useState} from "react";   
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";


const Bookings = () => {
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
//   const FakeBookings = [{'Id':'1','First' :'Mark','Last':'Otto','Email':'test@gmai.co,',
//   'RoomId': '001', 'CheckIn': '25.01.2023',"CheckOut" : '26.01.2023'},
//   {'Id':'2','First' :'Mark','Last':'Otto','Email':'test@gmai.co,',
//   'RoomId': '001', 'CheckIn': '25.01.2023',"CheckOut" : '26.01.2023'},
//   {'Id':'3','First' :'Mark','Last':'Otto','Email':'test@gmai.co,',
//   'RoomId': '001', 'CheckIn': '25.01.2023',"CheckOut" : '26.01.2023'},
//  ]
  const [bookings, setBookings] = useState(FakeBookings)

  const Bookings = () => {
    setBookings(FakeBookings);
  }
  
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results = {bookings} />
      </div>
    </div>
  );
};

export default Bookings;
