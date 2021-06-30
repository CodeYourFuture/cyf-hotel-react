import React from "react";

const NewBooking = (prop) => {
  const bookingData = [["id",Math.ceil(Math.random()*50)]];
  const collectData = event => {
    let data = [event.target.id, event.target.value];
    bookingData.push(data);
  };
  return (
    <form onSubmit={event => event.preventDefault()}>
      <label>First Name:</label>
      <input
        type="text"
        placeholder="Enter name here..."
        id="firstName"
        onBlur={collectData}
      />
      <label>Surname:</label>
      <input
        type="text"
        id="surname"
        placeholder="Enter surname here..."
        onBlur={collectData}
      />
      <label>Title:</label>
      <input
        type="text"
        id="title"
        placeholder="Enter title here..."
        onBlur={collectData}
      />
      <label>Email:</label>
      <input
        type="email"
        id="email"
        placeholder="Enter email here..."
        onBlur={collectData}
      />
      <label>Room id:</label>
      <input
        type="number"
        id="roomId"
        placeholder="Enter room id here..."
        onBlur={collectData}
      />
      <label>Check-in:</label>
      <input type="date" id="checkInDate" onBlur={collectData} />
      <label>Check-out:</label>
      <input type="date" id="checkOutDate" onBlur={collectData} />
      <button onClick={()=>prop.DataFunc(bookingData)}>
        Submit
      </button>
    </form>
  );
};

export default NewBooking;
