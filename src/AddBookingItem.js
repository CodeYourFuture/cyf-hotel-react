import React from "react";

const AddBookingItem = () => {
  return (
    <form>
      <input type="text" name="title" />
      <input type="text" name="firstName" />
      <input type="text" name="surname" />
      <input type="text" name="email" />
      <input type="text" name="roomId" />
      <input type="text" name="checkIn" />
      <input type="text" name="checkOut" />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default AddBookingItem;
