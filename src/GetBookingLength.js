import moment from "moment";

// Calculate booking length using the moment.js library, called by `SearchResults.js`.
let GetBookingLength = props => {
  return moment(props.guest.checkOutDate).diff(
    moment(props.guest.checkInDate),
    "days"
  );
};

export default GetBookingLength;
