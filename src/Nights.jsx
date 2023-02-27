import moment from "moment";
export default function Night({ checkInDate, checkOutDate }) {
   const checkIn = moment(checkInDate);
    const checkOut = moment(checkOutDate);
  const totalNights = checkOut.diff(checkIn, "days");
  return totalNights;
};
