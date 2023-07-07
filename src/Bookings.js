import React, {useState,useEffect} from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import loadingimg  from "./images/loadingimg.png"


const Bookings = () => {
  const [bookings,setBookings]=useState([]);
  const [filteredBookings,setFilteredBookings]=useState([]);
  const [contentLoading,setContentLoading]=useState(true);
  useEffect(() => {
    console.log("Welcome");

    fetch("https://cyf-react.glitch.me/delayed")
        .then(response => response.json())
        .then(data => {
          setBookings(data)
          setFilteredBookings(data)
          setContentLoading(false)}) // once data is fetched the content is going to be displayed and p below is going to be removed 
        .catch(error => console.error(error));
  }, []);


  const search = value => {
    const valToLowerCase =value.toLowerCase().trim();
    const filteredResults=bookings.filter(({firstName, surname}) => {
      return firstName.toLowerCase().includes(valToLowerCase) || surname.toLowerCase().includes(valToLowerCase)
    }
  );
    setFilteredBookings(filteredResults)
    console.info ("To Do!",filteredResults)
  }


 
  return (
    <div className="App-content">
      <div className="container">
      <Search search={search} />
      {contentLoading ? (  //if loading is true its going to display the paragraph 
          <p style={{textAlign:"center" , margin:"2em"}}>Loading content,please wait <img
          src={loadingimg}
          alt="timer"
          style={{height:"30px" ,margin:"5px"}}
        /></p>
        ) : (  
        <SearchResults results={filteredBookings} />
        )}
      </div>
    </div>
  );
};

export default Bookings;
