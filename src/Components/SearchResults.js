import React from "react";
import moment from "moment";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

function SearchResults(props) {
  return (
    <table className="table">
      <TableHead />
      <tbody>
        {props.results.map((item, index) => {
          const nightsSpent = moment(item.checkOutDate).diff(
            item.checkInDate,
            "days"
          );
          return <TableRow item={item} key={index} nightsSpent={nightsSpent} />;
        })}
      </tbody>
    </table>
  );
}

export default SearchResults;
