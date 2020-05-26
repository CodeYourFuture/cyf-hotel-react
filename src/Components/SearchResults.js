import React from "react";
import Columns from "../Components/Table/Columns";
import Rows from "../Components/Table/Rows";

const SearchResults = props => {
  const objDataFakeBooking = props.results[0];

  return (
    <table className="table table-hover table-responsive">
      <Columns fakeDataCol={objDataFakeBooking} />
      <Rows fakeData={props.results} />
    </table>
  );
};

export default SearchResults;
