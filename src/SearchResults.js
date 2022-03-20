import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

export default function SearchResults({ results }) {
  const tableHeaders = [
    "id",
    "title",
    "first name",
    "surname",
    "email",
    "room id",
    "check in date",
    "check out date",
    "nights",
    "profile"
  ];
  const [selectedId, setSelectedId] = useState();
  const selectProfile = e => {
    setSelectedId(e.target.value);
  };
  return (
    <>
      <table className="table">
        <TableHeader headers={tableHeaders} />
        <tbody>
          {results.map(booking => (
            <TableRow
              {...booking}
              key={booking.id}
              selectProfile={selectProfile}
            />
          ))}
        </tbody>
      </table>
      {selectedId && <CustomerProfile id={selectedId} />}
    </>
  );
}

const TableRow = props => {
  const {
    checkInDate,
    title,
    checkOutDate,
    id,
    roomId,
    email,
    surname,
    firstName,
    selectProfile
  } = props;
  const nights = moment(checkOutDate).diff(moment(checkInDate), "days");
  const [selected, setSelected] = useState(false);
  const selectRow = () => setSelected(!selected);
  return (
    <tr className={selected ? "table-secondary" : null} onClick={selectRow}>
      <td>{id}</td>
      <td>{title}</td>
      <td>{firstName}</td>
      <td>{surname}</td>
      <td>{email}</td>
      <td>{roomId}</td>
      <td>{checkInDate}</td>
      <td>{checkOutDate}</td>
      <td>{nights}</td>
      <td>
        <ShowProfileButton id={id} selectProfile={selectProfile} />
      </td>
    </tr>
  );
};

const ShowProfileButton = ({ id, selectProfile }) => {
  return (
    <button className="btn btn-secondary" value={id} onClick={selectProfile}>
      Profile
    </button>
  );
};

const TableHeader = ({ headers }) => (
  <thead>
    <tr>
      {headers.map(e => (
        <th scope="col" key={e}>
          {e}
        </th>
      ))}
    </tr>
  </thead>
);
