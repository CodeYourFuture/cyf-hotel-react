import React from "react";
import Columns from "../Components/Table/Columns";
import Rows from "../Components/Table/Rows";

const SearchResults = props => {
  return (
    <table className="table table-responsive">
      <Columns data={props.data} />
      <Rows data={props.data} />
    </table>
  );
};

export default SearchResults;
