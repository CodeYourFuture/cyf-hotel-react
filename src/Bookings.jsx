import React, { useState, useEffect } from "react";
import Search from "./Search.jsx";
import SearchResults from "./SearchResults.jsx";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const search = (searchVal) => {
    const result = bookings.filter(
      (person) => person.firstName === searchVal || person.surname === searchVal
    );
    setBookings(result);
  };

  // https://raw.githubusercontent.com/CodeYourFuture/cyf-hotel-react/master/src/data/fakeBookings.json - previous api link
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setIsLoading(true);
      })
      .catch((error) => {
        console.log(error + "in file Bookings.jsx");
      });
  }, []);

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {isLoading === false ? <p>Data is loading...</p> : <p></p>}
        <SearchResults results={bookings} list={bookings} />
      </div>
    </div>
  );
};

export default Bookings;

// 22. Show a loading message

//  we fetched the bookings from a remote API. Now show a loading state in <Bookings /> while the data from the server is being fetched.
//  To test this, try loading data from https://cyf-react.glitch.me/delayed, which has a 5 second delay before returning the data.
//   You will need to use another state to record when your application is loading data (this can be a boolean) and display a loading
//   message whenever the application is loading data.

// Hint: Try looking at your Pokemon app that you worked on in class for an example.

// Test: A message inviting the user to wait should be displayed on the screen until bookings data can be rendered on the screen.
// When bookings are rendered, the loading message should be hidden.
