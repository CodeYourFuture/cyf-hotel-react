// import React, { useState, useEffect } from "react";
// import Search from "./Search.js";
// import SearchResults from "./SearchResults";
// import {Hourglass} from 'react-loader-spinner'
// import fakeBookings from './data/fakeBookings.json'
// console.log(fakeBookings)
// const Bookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isError, setIsError] = useState(true);
//   const search = searchVal => {
//     // console.info("TO DO!", searchVal);
//     if (searchVal) {
//       const matchName = bookings.filter(person => {
//         return person.firstName
//           .toLowerCase()
//           .includes(
//             searchVal || person.lasttName.toLowerCase().includes(searchVal)
//           );
//       });

//       setBookings(matchName);
//     }
//   };
//   useEffect(() => {
//     setTimeout(() => {
//       async function fetchData() {
//         try {
//           const response = await fetch("https://cyf-react.glitch.me");
//           if (!response.ok) {
//             setLoading(false);
//             throw new Error("SERVER RESPONSE ERROR !!!");
//           }
//           const data = await response.json() || fakeBookings
          
//           setBookings(data);
//           setLoading(false);
//           setIsError(true);
//         } catch (error) {
//           console.log(error);
//           setIsError(false);
//         }
//       }
//       fetchData();
//     }, 2000);
//   }, []);

//   return (
//     <div className="App-content">
//       <div className="container">
//         <Search search={search} />
//         {bookings && <SearchResults data={bookings} />}
//         {<Hourglass color="#someColor" height={80} width={80} /> && <span> Loading... </span>}
//       </div>
//     </div>
//   );
// };

// export default Bookings;

import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
import { Hourglass } from 'react-loader-spinner';
import './data/fakeBookings.json';


const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch("https://temporary-cyf-react.onrender.com/");
      if (!response.ok) {
        throw new Error("SERVER RESPONSE ERROR !!!");
      }
      const data = await response.json() || fakeBookings;
      
      setBookings(data);
      setLoading(false);
      setIsError(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
      setBookings(fakeBookings); // Use local data in case of an error
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const search = searchVal => {
    if (searchVal) {
      const matchName = bookings.filter(person => {
        return person.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
               person.lastName.toLowerCase().includes(searchVal.toLowerCase());
      });
      setBookings(matchName);
    }
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {loading ? (
          <div>
            <Hourglass color="#someColor" height={80} width={80} />
            <span>Loading...</span>
          </div>
        ) : isError ? (
          <span>Error loading data</span>
        ) : (
          <SearchResults data={bookings} />
        )}
      </div>
    </div>
  );
};

export default Bookings;
