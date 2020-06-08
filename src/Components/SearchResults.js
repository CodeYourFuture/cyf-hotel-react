import React from "react";
import Columns from "../Components/Table/Columns";
import Row from "./Table/Row";

const SearchResults = props => {
  return (
    <table className="table table-responsive">
      <Columns data={props.data} />
      <tbody>
        {props.data.map(booking => {
          return <Row data={booking} key={booking.id} />;
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
