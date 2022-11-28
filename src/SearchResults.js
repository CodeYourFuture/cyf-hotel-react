//import moment from "moment";
import React from "react";
import TableRow from "./TableRow";

const SearchResults = ({ results }) => {
  //const [isClicked, setIsClicked] = useState(false);
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>title</th>
          <th>Firstname</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>Check in</th>
          <th>Check out</th>
          <th>Staying nights</th>
        </tr>
      </thead>
      <tbody>
        {results.map((booking, index) => {
          return <TableRow key={index} booking={booking} />;
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
