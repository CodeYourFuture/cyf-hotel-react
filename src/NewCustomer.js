import React, { useState } from "react";
import TableHead from "./TableHead";
import Moment from "moment";
import SearchButton from "./SearchButton";

const NewCustomer = ({ addCustomer }) => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [roomId, setRoomId] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const addToBookings = e => {
    e.preventDefault();
    if (
      id &&
      title &&
      firstName &&
      surname &&
      email &&
      roomId &&
      checkOut &&
      checkIn
    ) {
      addCustomer({
        id: id,
        title: title,
        firstName: firstName,
        surname: surname,
        email: email,
        roomId: roomId,
        checkInDate: checkIn,
        checkOutDate: checkOut
      });
      setId("");
      setTitle("");
      setFirstName("");
      setSurname("");
      setEmail("");
      setRoomId("");
      setCheckIn("");
      setCheckOut("");
    }
  };
  return (
    <>
      <h4>New customer registration</h4>
      <form className="table" onSubmit={addToBookings}>
        <table>
          <TableHead />
          <tbody>
            <tr>
              <td>
                <input
                  name="id"
                  type="text"
                  className="addId"
                  value={id}
                  onChange={e => setId(e.target.value)}
                />
              </td>
              <td>
                <input
                  name="title"
                  type="text"
                  className="addTitle"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              </td>
              <td>
                <input
                  name="firstName"
                  type="text"
                  className="addFirstName"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                />
              </td>
              <td>
                <input
                  name="surname"
                  type="text"
                  className="addSurname"
                  value={surname}
                  onChange={e => setSurname(e.target.value)}
                />
              </td>
              <td>
                <input
                  name="email"
                  type="email"
                  className="addEmail"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </td>
              <td>
                <input
                  name="roomId"
                  type="text"
                  className="addRoomId"
                  value={roomId}
                  onChange={e => setRoomId(e.target.value)}
                />
              </td>
              <td>
                <input
                  name="dateCheckIn"
                  type="date"
                  className="addCheckIn"
                  value={checkIn}
                  onChange={e => setCheckIn(e.target.value)}
                />
              </td>
              <td>
                <input
                  name="dateCheckOut"
                  type="date"
                  className="addCheckOut"
                  value={checkOut}
                  onChange={e => setCheckOut(e.target.value)}
                />
              </td>
              <td>
                <input
                  name="nights"
                  type="text"
                  className="nights"
                  value={
                    checkIn && checkOut
                      ? Moment(checkOut).diff(Moment(checkIn), "days")
                      : ""
                  }
                  readOnly
                />
              </td>
              <td>
                <SearchButton btnName="Submit" />{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
};

export default NewCustomer;
