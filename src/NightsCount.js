import React from "react";
import moment from "moment";

const NightsCount = ({ checkInDate, checkOutDate }) => {
  const calculateNumberOfNights = (checkInDate, checkOutDate) => {
    const checkIn = moment(checkInDate); //convert the checkInDate string into a moment object
    const checkOut = moment(checkOutDate);
    return checkOut.diff(checkIn, "days"); //calculates the number of days between checkIn and checkOut.
  };

  const numberOfNights = calculateNumberOfNights(checkInDate, checkOutDate);

  return <span>{numberOfNights} nights</span>;
};

export default NightsCount;
