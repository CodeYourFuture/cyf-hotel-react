import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TextField from "@material-ui/core/TextField";

const BookingFormModal = ({ bookings, setBookings }) => {
  const [show, setShow] = useState(false);
  const [guestDetails, setGuestDetails] = useState({
    id: "",
    title: "",
    firstName: "",
    surname: "",
    email: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: ""
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = e => {
    let updatedGuest = {
      ...guestDetails,
      [e.target.name]: e.target.value
    };
    setGuestDetails(updatedGuest);
  };
  const handleSubmit = () => {
    let newArr = [...bookings, guestDetails];
    fetch("https://hotel-cyf-server.onrender.com/bookings", {
      method: "POST",
      body: JSON.stringify(guestDetails),
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
    setBookings(newArr);
    setShow(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        New Booking
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registration Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TextField
            className="modal-content modal-text"
            variant="outlined"
            margin="dense"
            autoComplete="off"
            id="id"
            name="id"
            label="Id"
            type="text"
            required
            fullWidth
            onChange={handleChange}
            value={guestDetails.id}
          />
          <TextField
            className="modal-content modal-text"
            variant="outlined"
            margin="dense"
            autoComplete="off"
            id="title"
            name="title"
            label="Title"
            type="text"
            required
            fullWidth
            onChange={handleChange}
            value={guestDetails.title}
          />
          <TextField
            className="modal-content modal-text"
            variant="outlined"
            margin="dense"
            autoComplete="off"
            id="firstName"
            name="firstName"
            label="First name"
            type="text"
            required
            fullWidth
            onChange={handleChange}
            value={guestDetails.firstName}
          />
          <TextField
            className="modal-content modal-text"
            variant="outlined"
            margin="dense"
            autoComplete="off"
            id="surname"
            name="surname"
            label="Surname"
            type="text"
            required
            fullWidth
            onChange={handleChange}
            value={guestDetails.surname}
          />
          <TextField
            className="modal-content modal-text"
            variant="outlined"
            margin="dense"
            autoComplete="off"
            id="email"
            name="email"
            label="Email"
            type="text"
            required
            fullWidth
            onChange={handleChange}
            value={guestDetails.email}
          />
          <TextField
            className="modal-content modal-text"
            variant="outlined"
            margin="dense"
            autoComplete="off"
            id="roomId"
            name="roomId"
            label="Room Id"
            type="text"
            required
            fullWidth
            onChange={handleChange}
            value={guestDetails.roomId}
          />
          <TextField
            className="modal-content modal-text"
            variant="outlined"
            margin="dense"
            autoComplete="off"
            id="checkInDate"
            name="checkInDate"
            label="Check in date"
            type="text"
            required
            fullWidth
            onChange={handleChange}
            value={guestDetails.checkInDate}
          />
          <TextField
            className="modal-content modal-text"
            variant="outlined"
            margin="dense"
            autoComplete="off"
            id="checkOutDate"
            name="checkOutDate"
            label="Check out date"
            type="text"
            required
            fullWidth
            onChange={handleChange}
            value={guestDetails.checkOutDate}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit Form
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BookingFormModal;
