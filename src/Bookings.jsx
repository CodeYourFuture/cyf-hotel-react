import React, { useEffect, useState } from "react";
import Search from "./Search.jsx";
import SearchResults from "./SearchResults.jsx";
import Loader from "./Loader.jsx";
// import FakeBookings from "./data/fakeBookings.json";

// const Bookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [error, setError] = useState(false);
//   const [loader, setLoader] = useState(false);

//   const search = searchVal => {
//     console.info("TO DO!", searchVal);
//     const filteredVal = bookings.filter(
//       booking =>
//         booking.firstName.toLowerCase() === searchVal.toLowerCase ||
//         booking.surname.toLowerCase() === searchVal.toLowerCase()
//     );
//     setBookings(filteredVal);
//   };

//   // NUMBER 16 >> Fetching stopped glitch from responding!
//   // const [bookings, setBookings] = useState([]);
//   useEffect(() => {
//     fetch("https://cyf-react.glitch.me")
//       .then(res => res.json())
//       .then(data => {
//         // console.log(data);
//         setBookings(data);
//       });
//   }, []);

//   return (
//     <div className="App-content">
//       <div className="container">
//         <Search search={search} />
//         <SearchResults results={bookings} />
//       </div>
//     </div>
//   );
// };

// export default Bookings;

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    setBookings(
      bookings.filter(
        element =>
          element.firstName.toLowerCase() === searchVal.toLowerCase() ||
          element.surname.toLowerCase() === searchVal.toLowerCase()
      )
    );
  };

  useEffect(() => {
    setInterval(
      fetch("https://cyf-react.glitch.me/delayed")
        .then(res => res.json())
        .then(data => {
          setLoading(true);
          setError(true);
          setBookings(data);
        }),
      5000
    );
  }, []);

  if (bookings.error) {
    return error && <p>HTTP Error 500!</p>;
  }

  return loading ? (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Bookings;
