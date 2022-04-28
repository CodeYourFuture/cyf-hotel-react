import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SearchResult = props => {
  const [selectedId, setSelectedId] = useState();

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
            <th scope="col">Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((item, index) => (
            <TableRow item={item} index={index} setSelectedId={setSelectedId} />
          ))}
        </tbody>
      </table>
      <CustomerProfile id={selectedId} />
    </div>
  );
};

const TableRow = props => {
  const [selected, setSelected] = useState(false);

  const clickHandler = () => {
    setSelected(!selected);
  };

  return (
    <tr onClick={clickHandler} className={selected ? "selected" : null}>
      <th scope="row">{props.item.id}</th>
      <td>{props.item.title}</td>
      <td>{props.item.firstName}</td>
      <td>{props.item.surname}</td>
      <td>{props.item.email}</td>
      <td>{props.item.roomId}</td>
      <td>{props.item.checkInDate}</td>
      <td>{props.item.checkOutDate}</td>
      <td>
        {moment(props.item.checkOutDate).diff(
          moment(props.item.checkInDate),
          "days"
        )}
      </td>
      <td>
        <button
          className="btn btn-primary"
          onClick={() => {
            props.setSelectedId(props.item.id);
          }}
        >
          Show Profile
        </button>
      </td>
    </tr>
  );
};

export default SearchResult;
