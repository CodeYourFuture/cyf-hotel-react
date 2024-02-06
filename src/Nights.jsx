import moment from "moment";

export const numberOfNight = ({ checkInDate, checkOutDate }) => {
  const checkIn = moment(checkInDate);
  const checkOut = moment(checkOutDate);
  const nights = checkOut.diff(checkIn, "days");
  return nights;
};
