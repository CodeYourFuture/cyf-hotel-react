import React, { useState } from "react";
import moment from "moment";

const SearchResults = props => {
  let [tHead, setTHead] = useState(true);
  function handleClick0() {
    setTHead(!tHead);
  }
  let [row1, setRow1] = useState(true);
  function handleClick1() {
    setRow1(!row1);
  }
  let [row2, setRow2] = useState(true);
  function handleClick2() {
    setRow2(!row2);
  }
  let [row3, setRow3] = useState(true);
  function handleClick3() {
    setRow3(!row3);
  }
  let [row4, setRow4] = useState(true);
  function handleClick4() {
    setRow4(!row4);
  }
  let [row5, setRow5] = useState(true);
  function handleClick5() {
    setRow5(!row5);
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr className={tHead ? "" : "highlightTHead"} onClick={handleClick0}>
            <th scope="col">I.D.</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room I.D.</th>
            <th scope="col">Check-In Date</th>
            <th scope="col">Check-Out Date</th>
            <th scope="col">No. of Nights</th>
          </tr>
        </thead>
        <tbody>
          {/* {props.results.map((booking) => ( */}
          <tr className={row1 ? "" : "highlightRow1"} onClick={handleClick1}>
            <td>{props.results[0].id}</td>
            <td>{props.results[0].title}</td>
            <td>{props.results[0].firstName}</td>
            <td>{props.results[0].surname}</td>
            <td>{props.results[0].email}</td>
            <td>{props.results[0].roomId}</td>
            <td>{props.results[0].checkInDate}</td>
            <td>{props.results[0].checkOutDate}</td>
            <td>
              {moment(props.results[0].checkOutDate).diff(
                moment(props.results[0].checkInDate),
                "days"
              )}
            </td>
          </tr>
          <tr className={row2 ? "" : "highlightRow2"} onClick={handleClick2}>
            <td>{props.results[1].id}</td>
            <td>{props.results[1].title}</td>
            <td>{props.results[1].firstName}</td>
            <td>{props.results[1].surname}</td>
            <td>{props.results[1].email}</td>
            <td>{props.results[1].roomId}</td>
            <td>{props.results[1].checkInDate}</td>
            <td>{props.results[1].checkOutDate}</td>
            <td>
              {moment(props.results[1].checkOutDate).diff(
                moment(props.results[1].checkInDate),
                "days"
              )}
            </td>
          </tr>
          <tr className={row3 ? "" : "highlightRow3"} onClick={handleClick3}>
            <td>{props.results[2].id}</td>
            <td>{props.results[2].title}</td>
            <td>{props.results[2].firstName}</td>
            <td>{props.results[2].surname}</td>
            <td>{props.results[2].email}</td>
            <td>{props.results[2].roomId}</td>
            <td>{props.results[2].checkInDate}</td>
            <td>{props.results[2].checkOutDate}</td>
            <td>
              {moment(props.results[2].checkOutDate).diff(
                moment(props.results[2].checkInDate),
                "days"
              )}
            </td>
          </tr>
          <tr className={row4 ? "" : "highlightRow4"} onClick={handleClick4}>
            <td>{props.results[3].id}</td>
            <td>{props.results[3].title}</td>
            <td>{props.results[3].firstName}</td>
            <td>{props.results[3].surname}</td>
            <td>{props.results[3].email}</td>
            <td>{props.results[3].roomId}</td>
            <td>{props.results[3].checkInDate}</td>
            <td>{props.results[3].checkOutDate}</td>
            <td>
              {moment(props.results[3].checkOutDate).diff(
                moment(props.results[3].checkInDate),
                "days"
              )}
            </td>
          </tr>
          <tr className={row5 ? "" : "highlightRow5"} onClick={handleClick5}>
            <td>{props.results[4].id}</td>
            <td>{props.results[4].title}</td>
            <td>{props.results[4].firstName}</td>
            <td>{props.results[4].surname}</td>
            <td>{props.results[4].email}</td>
            <td>{props.results[4].roomId}</td>
            <td>{props.results[4].checkInDate}</td>
            <td>{props.results[4].checkOutDate}</td>
            <td>
              {moment(props.results[4].checkOutDate).diff(
                moment(props.results[4].checkInDate),
                "days"
              )}
            </td>
          </tr>
          {/* ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
