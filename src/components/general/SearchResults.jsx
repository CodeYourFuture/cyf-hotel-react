import React, { useState } from "react";
import "../../css/searchresults.css";
import CustomerProfile from "./CustomerProfile";
import SearchResultItem from "./SearchResultItems";

const SearchResults = ({ result }) => {
  const [guestId, setGuestId] = useState("");

  const idHandler = id => {
    setGuestId(id);
  };

  return (
    <>
      <article className="results_table">
        <table className="booking_table">
          <thead className="table_header">
            <tr>
              <td>id</td>
              <td>title</td>
              <td>first name</td>
              <td>surname</td>
              <td>email</td>
              <td>room id</td>
              <td>check in date</td>
              <td>check out date</td>
              <td>number of nights</td>
              <td>profile</td>
            </tr>
          </thead>
          <tbody className="table_body">
            {result.map((item, index) => {
              return (
                <SearchResultItem
                  key={index}
                  item={item}
                  idHandler={idHandler}
                />
              );
            })}
          </tbody>
        </table>
      </article>
      <CustomerProfile guestId={guestId} />
    </>
  );
};

export default SearchResults;
