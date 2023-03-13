import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.jsx";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [handleError, setHandleError] = useState(null);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
    const filteredValue = bookings.filter(value => {
      return (
        value.firstName.toLowerCase().includes(searchVal) ||
        value.surname.toLowerCase().includes(searchVal)
      );
    });
    setBookings(filteredValue, searchVal);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(response => {
        return response.json();
      })
      .then(data => {
        // console.log(data);
        if (data.error) {
          setHandleError(data.error);
        } else {
          setBookings(data);
        }
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App-content">
      {loading ? (
        <p>Please Wait... Details loading</p>
      ) : (
        <div>
          {handleError ? (
            <p>{handleError}</p>
          ) : (
            <div className="container">
              <Search search={search} />
              <SearchResults results={bookings} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Bookings;

// const Bookings = () => {
//   const [searchInput, setSearchInput] = useState("");
//   const [bookings, setBookings] = useState([]);
//   // const [profile, setProfile] = useState(null);

//   // function setCustomerProfile(id) {
//   //   const currentProfile = bookings.find((result) => result.id == id);
//   //   setProfile(currentProfile);
//   // }

//   function handleSearchInput(event) {
//     setSearchInput(event.target.value);
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     search(searchInput);
//   }

//   const search = (searchVal) => {
//     const filteredValue = bookings.filter((value) => {
//       return (
//         value.firstName.toLowerCase().includes(searchVal) ||
//         value.surname.toLowerCase().includes(searchVal)
//       );
//     });
//     setBookings(filteredValue, searchVal);
//   };

//   useEffect(() => {
//     fetch("https://cyf-react.glitch.me")
//       .then((response) => response.json())
//       .then((data) => setBookings(data))
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div className="App-content">
//       <div className="container">
//         <Search
//           searchInput={searchInput}
//           handleSearchInput={handleSearchInput}
//           handleSubmit={handleSubmit}
//         />
//         <SearchResults
//           results={bookings}
//           // updateProfile={setProfile}
//           searchInput={searchInput}
//           // setCustomerProfile={setCustomerProfile}
//         />

//         {/* {profile && (
//           <ul>
//             <li key={profile.id}>Customer {profile.id} Profile</li>
//             <li key={profile.email}>Customer email: {profile.email}</li>
//             <li key={profile.vip}>
//               VIP customer: {profile.vip ? "VIP" : "Not VIP"}
//             </li>
//             <li key={profile.phoneNumber}>
//               Customer phone number: {profile.phoneNumber}
//             </li>
//           </ul>
//         )} */}
//       </div>
//     </div>
//   );
// };
