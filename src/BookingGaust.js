import moment from "moment";

// Calculate booking length using the moment.js library, called by `SearchResults.js`
let BookingLength = props => {
  console.log(props.guest.checkOutDate);

  return moment(props.guest.checkOutDate).diff(
    moment(props.guest.checkInDate),
    "days"
  );
};

export default BookingLength;
