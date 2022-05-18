import React, { useState } from "react";
import moment from "moment";
const SearchResultItem = props => {
  const { item, index, idHandler } = props;
  const [selected, setSelected] = useState(false);
  return (
    <tr
      key={index}
      onClick={() => setSelected(!selected)}
      className={selected ? "is_selected" : "table_header"}
    >
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>{item.firstName}</td>
      <td>{item.surname}</td>
      <td>{item.email}</td>
      <td>{item.roomId}</td>
      <td>{item.checkInDate}</td>
      <td>{item.checkOutDate}</td>
      <td>{moment(item.checkOutDate).diff(moment(item.checkInDate), "day")}</td>
      <button className="" onClick={() => idHandler(item.id)}>
        Show Profile
      </button>
    </tr>
  );
};

export default SearchResultItem;
