import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
import CustomerPofile from "./CustomerProfile";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showError, setShowError] = useState(false);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/error`)
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })

      .then(data => {
        setBookings(data);
      })
      .catch(e => {
        setShowError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const [clickOnButton, setClickOnButton] = useState("");
  const ClickId = id => {
    setClickOnButton(id);
  };

  const [searchResults2, setSearchResults2] = useState([]);

  const search = searchVal => {
    const resultConditional = bookings.filter(booking => {
      if (
        booking.firstName.toLowerCase() == searchVal.toLowerCase() ||
        booking.surname.toLowerCase() == searchVal.toLowerCase()
      ) {
        return true;
      }
      return false;
    });
    setSearchResults2(resultConditional);
    // searchVal !== "";
    // console.info("TO DO!", searchVal);
    // console.log("valor ejecutado desde booking" + searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {loading && <p>loading</p>}
        {!loading && (
          <SearchResults result={searchResults2} ClickId={ClickId} />
        )}
        {showError && <p>esta pasando algo raro</p>}

        <CustomerPofile id={clickOnButton} />
      </div>
    </div>
  );
};

export default Bookings;
