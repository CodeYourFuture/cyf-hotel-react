import React from "react";
import Columns from "../Components/Table/Columns";
import Rows from "../Components/Table/Rows";

function SearchResults(props) {
  let objDataFakeBooking = props.results[0];

  return (
    <table className="table">
      <Columns fakeDataCol={objDataFakeBooking} />
      <Rows />
    </table>
  );
}

export default SearchResults;
