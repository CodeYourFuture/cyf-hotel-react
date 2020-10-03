import React, { useState } from "react";
import Moment from "moment";

const SearchResultsLine = ({ item, ind }) => {
  const [selected, setSelected] = useState("");
  const selectLine = () => setSelected(selected ? "" : "selected");

  return (
    <tr key={ind} onClick={selectLine} className={selected}>
      <th scope="row">{item.id}</th>
      <td>{item.title}</td>
      <td>{item.firstName}</td>
      <td>{item.surname}</td>
      <td>{item.email}</td>
      <td>{item.roomId}</td>
      <td>{item.checkInDate}</td>
      <td>{item.checkOutDate}</td>
      <td>
        {Moment(item.checkOutDate).diff(Moment(item.checkInDate), "days")}
      </td>
      <td>
        <button>Show profile</button>
      </td>
    </tr>
  );
};

export default SearchResultsLine;
