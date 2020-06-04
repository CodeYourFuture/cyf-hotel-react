import React, { useState } from "react";
import Columns from "../Components/Table/Columns";
import Rows from "../Components/Table/Rows";

const SearchResults = props => {
  const [selectedRow, setSelectedRow] = useState(null);

  return (
    <table className="table table-responsive">
      <Columns data={props.data} />
      <tbody>
        {props.data.map(booking => {
          return (
            <Rows
              data={booking}
              key={booking.id}
              isSelected={booking.id === selectedRow}
              setSelectedRow={setSelectedRow}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
