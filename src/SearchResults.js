import React, { useState } from "react";
import moment from "moment";
import "./App.css";

const SearchResults = props => {
  const [order, setOrder] = useState(true);
  return (
    <>
      <table className="table table-light">
        <thead className="thead-light">
          <tr>
            <th
              scope="col"
              onClick={() => {
                props.sortOrder("id", order);
                setOrder(!order);
              }}
            >
              Id
            </th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Number of nights</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {props.bkings.map((val, id) => (
            <Row
              key={id}
              val={val}
              customerProfileBk={props.customerProfileBk}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

const Row = ({ val, id, customerProfileBk }) => {
  const [highlight, setHighlight] = useState(null);

  function handle() {
    if (highlight === null) {
      setHighlight("pink");
    } else setHighlight(null);
  }

  return (
    <tr onClick={handle} className={highlight} key={id}>
      <th key={id} scope="row">
        {val.id}
      </th>
      <td key={id}>{val.title}</td>
      <td>{val.firstName}</td>
      <td>{val.surname}</td>
      <td>{val.email}</td>
      <td>{val.roomId}</td>
      <td>{val.checkInDate}</td>
      <td>{val.checkOutDate}</td>
      <td>{moment(val.checkOutDate).diff(val.checkInDate, "days")}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          value={val.id}
          onClick={() => customerProfileBk(val)}
        >
          Show profile
        </button>
      </td>
    </tr>
  );
};

export default SearchResults;
