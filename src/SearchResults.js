import React, { useState } from "react";
import "./App.css";
import SearchResult from "./SearchResult";
import CustomerProfile from "./CustomerProfile";
import Sort from "./Sort";

//import SearchButton from "./SearchButton";

const SearchResults = props => {
  const [id, setId] = useState(0);

  const handler = () => {
    props.sortHandler("title");
  };
  // showId function
  const showId = newId => {
    // update the id state variable
    setId(() => newId);
  };
  // displayProfile() will be implemented once show profile button clicked
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
            <th>
              Title <Sort handler={handler} />
            </th>
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
              keys={index + 1}
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
      {/*{if display is true, CustomerProfile will be shown. But if display is false, CustomerProfile will not be shown. Notice that CustomerProfile has a prop called id}*/}
      {display && <CustomerProfile id={id} />}
    </div>
  );
};
export default SearchResults;
