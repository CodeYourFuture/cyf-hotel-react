import moment from "moment";

const night = ({ checkInDate, checkOutDate }) => {
  const checkIn = moment(checkInDate);
  const checkOut = moment(checkOutDate);
  const nightDifference = checkOut.diff(checkIn, "days");
  return nightDifference;
};

export default night;
