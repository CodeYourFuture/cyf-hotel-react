import React, { useState } from "react";
import moment from "moment";

const BookingRow = ({ booked, handler }) => {
  const [selected, setSelected] = useState("");
  const toggleSelect = e => {
    if ("id" in e.target && e.target.tagName === "BUTTON") {
      console.log("id exists", e.target, e.target.tagName);
      return;
    } else {
      console.log("id does not exists", e.target);
    }
    console.log("BookingRow: ", e, e.currentTarget, e.target);
    setSelected(selected === "" ? "selected" : "");
  };
  return (
    <tr key={booked.id} className={selected} onClick={toggleSelect}>
      {Object.keys(booked).map(key => (
        <td key={booked[key]}>{booked[key]}</td>
      ))}
      <td key="totalNights">
        {moment(booked.checkOutDate).diff(moment(booked.checkInDate), "days")}
      </td>
      <td>
        <button id={booked.id} className="btn btn-primary" onClick={handler}>
          Show Profile
        </button>
      </td>
    </tr>
  );
};

export default BookingRow;
