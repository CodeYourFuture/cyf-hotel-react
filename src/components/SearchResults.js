import React, { useState } from "react";
import BookingGuest from "./BookingGuest";
import CustomerProfile from "./CoustomerProfile.js";

//  filter data and search for deferent type of from the table

function SearchResults(props) {
  const [highlight, setHighlight] = useState(" ");
  const [highlight0, setHighlight0] = useState("");
  const [highlight1, setHighlight1] = useState("");
  const [highlight2, setHighlight2] = useState("");
  const [highlight3, setHighlight3] = useState("");
  const [highlight4, setHighlight4] = useState("");
  const [resultSearch, setResultSearch] = useState("");

  return (
    <div className="inputResult">
      {" "}
      <div className="input-profile">
        <div className="show-profile">
          {highlight !== undefined && <CustomerProfile id={highlight} />}
          {highlight2 !== undefined && <CustomerProfile first={highlight2} />}
          {highlight3 !== undefined && <CustomerProfile email={highlight3} />}
          {highlight1 !== undefined && <CustomerProfile room={highlight1} />}
          {highlight4 !== undefined && <CustomerProfile days={highlight4} />}
        </div>
        <div className="first1Button">
          <input
            type="text"
            id="customerName"
            value={resultSearch}
            placeholder="Customer search..."
            onChange={e => setResultSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead className="thead-dark">
            <tr className="tableR">
              <th scope="col">id</th>
              <th scope="col">title</th>
              <th scope="col">FirstName</th>
              <th scope="col">surname</th>
              <th scope="col">email</th>
              <th scope="col">roomId</th>
              <th scope="col">checkInData</th>
              <th scope="col">checkOutData</th>
              <th scope="col">nights</th>
              <th scope="col">show id</th>
            </tr>
          </thead>
          <tbody>
            {props.results
              .filter(val => {
                if (highlight0 !== "") {
                  return val;
                } else if (
                  val.firstName
                    .toLowerCase()
                    .includes(resultSearch.toLowerCase()) ||
                  val.email
                    .toLowerCase()
                    .includes(resultSearch.toLowerCase()) ||
                  val.surname.toLowerCase().includes(resultSearch.toLowerCase())
                ) {
                  return val;
                } else {
                  return null;
                }
              })
              .map((result, index) => (
                <tr key={index}>
                  <td>{result.id}</td>
                  <td>{result.title}</td>
                  <td>{result.firstName}</td>
                  <td>{result.surname}</td>
                  <td>{result.email}</td>
                  <td>{result.roomId}</td>
                  <td>{result.checkInDate}</td>
                  <td>{result.checkOutDate}</td>
                  <td>{<BookingGuest guest={result} />}</td>
                  <td>
                    <button
                      key={index}
                      onClick={() =>
                        setHighlight("id, " + result.id) ||
                        setHighlight1("room, " + result.roomId) ||
                        setHighlight2("name, " + result.firstName) ||
                        setHighlight3("email, " + result.email) ||
                        setHighlight4(<BookingGuest guest={result} />)
                      }
                      className="btn btn-primary"
                    >
                      show Profile
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default SearchResults;
