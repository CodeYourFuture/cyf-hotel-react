import React, { useState } from "react";
const AddEntry = prop => {
  ///cancel form
  function cancelForm() {
    //document.getElementById("table-responsive").style.display="block"
    //document.getElementById("frmCustomer").preventDefault;
    prop.addEntryFunction("cancelEntry");
  }
  //style of this doc

  //send to booking
  let newEntry = [];

  function submit(event) {
    // event.preventDefault();

    if (newEntry.length === 7) {
      event.preventDefault();
      prop.addEntryDivNone(newEntry);
    } else {
      event.preventDefault();
    }
  }
  //make data in for to be send
  ////////////////////////title
  const [title, setTitle] = useState(null);
  function handleTitle(event) {
    setTitle(event.target.value);
  }
  ////////////////////////first name
  const [fname, setFname] = useState(null);
  function handleFirstName(event) {
    setFname(event.target.value);
  }
  ///////////////////surname
  const [sname, setSname] = useState(null);
  function handleSurName(event) {
    setSname(event.target.value);
  }
  //////////////////////email
  const [email, setEmail] = useState(null);
  function handleEmail(event) {
    setEmail(event.target.value);
  }
  /////////////////////RoomID
  const [roomId, setRoomId] = useState(null);
  function handleRoomID(event) {
    setRoomId(event.target.value);
  }
  /////////////////////CheckIn
  const [checkIn, setCheckIn] = useState(null);
  function handleCheckIn(event) {
    setCheckIn(event.target.value);
  }
  /////////////////////CheckOut
  const [checkOut, setCheckOut] = useState(null);
  function handleCheckOut(event) {
    setCheckOut(event.target.value);
  }
  /////////////////phone
  const [phone, setPhone] = useState();
  function handlePhone(event) {
    setPhone(event.target.value);
    console.log(phone);
  }
  function Add() {
    if (
      title === null ||
      fname === null ||
      sname === null ||
      email === null ||
      checkIn === null ||
      checkOut === null
    ) {
      alert("please fill all fields");
    } else {
      newEntry = [title, fname, sname, email, roomId, checkIn, checkOut];
    }
  }
  function load(event) {
    alert("ss");
    event.style.display = "table";
  }
  return (
    <>
      <form onSubmit={submit} onLoad={load} id="frmCustomer">
        <table class="table table-striped table-light table-bordered table-hover table-sm">
          <thead class="thead-light">
            <th scop="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">SurNAme</th>
            <th scope="col">Email</th>
            <th scope="col">RoomID</th>
            <th scope="col">Check in Date</th>
            <th scope="col">Check out Date</th>
            <th scope="col">Phone</th>
            <th scope="col" onClick={cancelForm}>
              X
            </th>
          </thead>
          <tbody>
            <tr id="selectedRowId">
              <td>
                <input
                  type="text"
                  id="txtTitle"
                  onChange={handleTitle}
                  style={{ width: "40px" }}
                />
              </td>
              <td>
                <input
                  type="text"
                  id="txtFirstName"
                  onChange={handleFirstName}
                  style={{ width: "100px" }}
                />
              </td>
              <td>
                <input
                  type="text"
                  id="txtSurName"
                  onChange={handleSurName}
                  style={{ width: "100px" }}
                />
              </td>
              <td>
                <input
                  type="text"
                  id="txtEmail"
                  onChange={handleEmail}
                  style={{ width: "100px" }}
                />
              </td>
              <td>
                <input
                  type="text"
                  id="txtRoomID"
                  onChange={handleRoomID}
                  style={{ width: "40px" }}
                />
              </td>
              <td>
                <input
                  type="text"
                  id="txtCheckIn"
                  onChange={handleCheckIn}
                  style={{ width: "100px" }}
                />
              </td>
              <td>
                <input
                  type="text"
                  id="txtCheckOut"
                  onChange={handleCheckOut}
                  style={{ width: "100px" }}
                />
              </td>
              <td>
                <input
                  type="text"
                  id="txtPhone"
                  onChange={handlePhone}
                  style={{ width: "100px" }}
                />
              </td>
              <td>
                <button className="btn btn-primary" onClick={Add}>
                  Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
};

export default AddEntry;
