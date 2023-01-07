import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import CustomerProfile from "./CustomerProfile";

async function getCustomerProfile(id) {
  const res = await fetch(`https://cyf-react.glitch.me/customers/${id}>`);
  const data = await res.json();
  setCurrentCustomer(data);
}

const SearchResults = props => {
  const [highlight, setHighlight] = useState([]);
  const [profileId, setProfileId] = useState("");

  function Selecter(id) {
    if (highlight.includes(id)) {
      setHighlight(highlight.filter(el => el !== id));
    } else {
      setHighlight(highlight.concat(id));
    }
  }

  return (
    <>
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
            <th scope="col">action</th>
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
              <td>
                <button
                  className="btn btn-outline-success"
                  onClick={() => setProfileId(result.id)}
                >
                  Show profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <CustomerProfile id={profileId} />
    </>
  );
};

export default SearchResults;

// let checkDiff = (InDate, OutDate) => {
//   const checkInDate = Moment(InDate, "YYYY-MM-DD");
//   const checkOutDate = Moment(OutDate, "YYYY-MM-DD");
//   const diff = checkOutDate.diff(checkInDate, "days");
//   return diff;
// };
