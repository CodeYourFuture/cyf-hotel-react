import React, { useState } from "react";
import moment from "moment";

const Row = props => {
  const [selected, setSelected] = useState(false);
  const isSelected = () => {
    setSelected(!selected);
  };

  const rows = props.row;
  return (
    <tr
      className={selected ? "skyBlue" : ""}
      id={`${rows.id}`}
      key={rows.id}
      value={rows.id}
      onClick={isSelected}
    >
      <td>{rows.id}</td>
      <td>{rows.title}</td>
      <td>{rows.firstName}</td>
      <td>{rows.surname}</td>
      <td>{rows.email}</td>
      <td>{rows.roomId}</td>
      <td>{rows.checkInDate}</td>
      <td>{rows.checkOutDate}</td>
      <td>
        {moment(rows.checkOutDate).diff(moment(rows.checkInDate), "days")}
      </td>
      <td>
        <button
          className="button"
          id={rows.id}
          onClick={e => {
            props.idSetter(e, rows.id);
          }}
        >
          Show Profile
        </button>
      </td>
    </tr>
  );
};

export default Row;
