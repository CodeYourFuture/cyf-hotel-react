import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";
import Loading from './Loading.jsx'

const Bookings = (props) => {
  const [bookings, setBookings] = useState([]);
  const [load, setLoad] = useState(true);
  const[data,setData] = useState([]);
  
 
  
  const search = (searchsInput) => {
    
    const filteredResults = bookings.filter((item) => {
      
      return (
        (item.firstName.toString().toLowerCase().includes(searchsInput.toLowerCase()))||
        (item.surname.toString().toLowerCase().includes(searchsInput.toLowerCase())) )
        
  } ); 
  {setBookings(filteredResults);}
       } 
  const restbookings = (data) => {
    return
    setBookings(data);
  }




  useEffect(()=>{
      // fetch('https://cyf-react.glitch.me')
      
      fetch('https://cyf-react.glitch.me/delayed')
      
      // fetch('https://cyf-react.glitch.me/error')
      
      .then((res) =>
      {if (!res.ok) alert("there is no data in the API")
    
      return res.json() })

      .then((data) => {setBookings(data)
        setLoad(false)}) 
       .catch((error) => console.error("Error fetching data:", error));
        // Handle errors here
            
    
  }, [props.id])
  
  useEffect(() => {
    console.log("Bookings during render:", bookings);
  });  

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
 {load === true ? <Loading /> :
 < SearchResults bookings={bookings}  />} 
      </div>
    </div>
  );
};

export default Bookings;

