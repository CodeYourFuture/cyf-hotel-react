import BookingForm from "./BookingForm";

const AddBooking = (props) => {
  return (
    <div>
      <h4 className="text-left">Add New Booking</h4>
      <div>
        <BookingForm setBookings={props.setBookings} />
      </div>
    </div>
  );
};

export default AddBooking;
