import React, { useState } from "react";
import Moment from "react-moment";

// let checkDiff = (InDate, OutDate) => {
//   const checkInDate = Moment(InDate, "YYYY-MM-DD");
//   const checkOutDate = Moment(OutDate, "YYYY-MM-DD");
//   const diff = checkOutDate.diff(checkInDate, "days");
//   return diff;
// };

const SearchResults = props => {
  // console.log(props);
  const [highlight, setHighlight] = useState([]);
  console.log(highlight);
  function Selecter(id) {
    console.log(id);
    if (highlight.includes(id)) {
      setHighlight(highlight.filter(el => el !== id));
    } else {
      setHighlight(highlight.concat(id));
    }
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">first name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
          <th scope="col">number of nights</th>
        </tr>
      </thead>
      <tbody>
        {/* props.results => fakeBooking.json */}
        {props.results.map((result, i) => (
          <tr
            key={i}
            style={
              highlight.includes(result.id)
                ? { backgroundColor: "#f1f2f6" }
                : { backgroundColor: "#fff" }
            }
            onClick={() => Selecter(result.id)}
          >
            <td>{result.id}</td>
            <td>{result.title}</td>
            <td>{result.firstName}</td>
            <td>{result.surname}</td>
            <td>{result.email}</td>
            <td>{result.roomId}</td>
            <td>{result.checkInDate}</td>
            <td>{result.checkOutDate}</td>
            {/* <td>{checkDiff(result.checkInDate,result.checkOutDate)}</td> */}
            <td>
              <Moment diff={result.checkInDate} unit="days">
                {result.checkOutDate}
              </Moment>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
