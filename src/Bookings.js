import React, {useEffect, useState} from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () =>
{
  const search = searchVal =>
  {
    let searchedBookings = bookings.filter(booking =>
    {
      if(booking.firstName.toLowerCase() === searchVal.toLowerCase() || booking.surname.toLowerCase() === searchVal.toLowerCase())
      {
        return true;
      }

      else
      {
        return false;
      }
    });

    return setBookings(searchedBookings);
  }
  const [status, setStatus] = useState("Loading");

  const [bookings, setBookings] = useState([]);

  useEffect(() =>
  {
    fetch("https://cyf-react.glitch.me")
      .then(response => response.json())
      .then(data =>
        {
          if (data.error)
          {
            setStatus("Failed");
            console.log("Loading Failed")
            //setErrorMsg(data.error);
          }
          else
          {
            setBookings(data);
            setStatus("Finished");
            console.log("Loading Finished")
          }
        })
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        {status === "Finished" && 
        (
          <>
            <Search search={search}/>
            <SearchResults results={bookings} status ={status}/>
          </>
        )}
        {status === "Loading" && "Loading"}
        {status === "Failed" && "Failed To Load"}
      </div>
    </div>
  );
};

export default Bookings;
