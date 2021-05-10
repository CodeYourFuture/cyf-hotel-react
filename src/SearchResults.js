import React, { useState, useEffect } from "react";
import SearchResult from "./SearchResult";
import TableHeading from "./TableHeading";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [guestId, setGuestId] = useState("");

  const handleClickButton = id => {
    console.log("*******" + id);
    return setGuestId(id);
  };

  // useEffect(() => {
  //   (guestId) ? (fetch(`https://cyf-react.glitch.me/customers/${guestID}`)
  //     .then(res => res.json)
  //     .then (data => )
  //   )
  //  :
  // }, []);
  return (
    <div>
      <table className="table table-striped table-bordered table-hover text-center">
        <TableHeading />
        <tbody>
          {props.results.map((info, index) => (
            <SearchResult
              info={info}
              index={index}
              handleClickButton={handleClickButton}
            />
          ))}
        </tbody>
      </table>
      <CustomerProfile id={guestId} />
    </div>
  );
};

export default SearchResults;
