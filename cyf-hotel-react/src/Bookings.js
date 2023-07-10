import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";

const Bookings = (props) => {
  const [bookings, setBookings] = useState([]);
  const search = (e) => {
   setBookings(e.target.value); 
  };

  useEffect(()=>{
    // console.log("Bookings");
    if (props.id){
      fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then((res) => res.json())
      .then((data) => setBookings(data)) 
    }
  }, [props.id])
      

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults const bookings = {[
    {
      id: 1,
      title: 'Mr',
      firstName: 'John',
      surname: 'Doe',
      email: 'johndoe@example.com',
      roomId: 101,
      checkInDate: '2023-06-20',
      checkOutDate: '2023-06-25'
    },
    {
      id: 2,
      title: 'Mrs',
      firstName: 'Jane',
      surname: 'Smith',
      email: 'janesmith@example.com',
      roomId: 202,
      checkInDate: '2023-07-10',
      checkOutDate: '2023-07-15'
    },
  ]}
 /> */}
 
 <SearchResults bookings={FakeBookings} /> 
      </div>
    </div>
  );
};

export default Bookings;
