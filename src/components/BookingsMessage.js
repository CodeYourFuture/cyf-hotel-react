import React, { Component } from "react";

const BookingsMessage = () => {
  return (
    <div className="row">
      <p>There are booking available for {new Date().toLocaleDateString()}</p>
    </div>
  );
}

export default BookingsMessage;
