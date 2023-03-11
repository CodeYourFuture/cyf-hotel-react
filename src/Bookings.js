import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";




const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  // useEffect(() => {
  //   fetch(`https://cyf-react.glitch.me/delayed`)
  //     .then((res) => {
  //       if (!res.ok) {
  //         setErrorOccurred({
  //           ok: res.ok,
  //           status: res.status,
  //           statusText: res.statusText,
  //         });
  //         throw new Error(res);
  //       } else {
  //         return res.json();
  //       }
  //     })
  //     .then((data) => {
  //       setBookings(data);
  //       setData(data);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);


  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
       { /* <SearchResults  results={FakeBookings} /> */}
      </div>
    </div>
  );
};

export default Bookings
