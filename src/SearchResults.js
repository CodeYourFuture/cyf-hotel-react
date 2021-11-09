import React, { useState } from "react";
import "./App.css";
import SearchResult from "./SearchResult";
import CustomerProfile from "./CustomerProfile";

//import SearchButton from "./SearchButton";

const SearchResults = (props) => {
  const [id, setId] = useState(0);
  const showId = (newId) => {
    setId(() => newId);
  };
  const [display, setDisplay] = useState(false);
  const displayProfile = () => {
    setDisplay(!display); //!display: You will need click to display to remove the old id and click to display again
    //setDisplay(true); // one click to display and then it will automatically change the id
  };
  return (
    <div>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>First Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Room Id</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>No. Of Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((oneObj, index) => (
            <SearchResult
              result={oneObj}
              keys={index}
              showId={showId}
              displayProfile={displayProfile}
            />
            //const [selectedBookingId, setSelectedBookingId] = useState(null)
            //<tr
            //key={result.id}
            //className={selectedBookingId === result.id ? "table-warning" : ""}
            //onClick={() =>‏
            // setSelectedBookingId(result.id === selectedBookingId ? null : result.id)
            //}
            //>
          ))}
        </tbody>
      </table>
      {/*{props.children}*/}
      {display && <CustomerProfile id={id} />}
    </div>
  );
};
export default SearchResults;