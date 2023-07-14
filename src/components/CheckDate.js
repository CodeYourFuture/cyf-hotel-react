import React, { useState } from "react";
import Book from "../data/booking.json";
import DatePicker from "react-datepicker";
import Button from "react-bootstrap/Button";
//import BookingNight from './BookingNight';

function CheckDate() {
  const [changeRoom, setChangeRoom] = useState(0);
  const [changeAdult, setChangeAdult] = useState(0);
  const [changeChild, setChangeChild] = useState(0);
  const [selectRoom, setSelectRoom] = useState(false);
  const [date, setDate] = useState(null);
  const [dateOut, setDateOut] = useState(null);
  const orderRoom = () => {
    setSelectRoom(false);
  };
  const showSelect = () => {
    setSelectRoom(true);
  };
  const selectedDate = () => {
    alert("Please select a date");
    setDate("");
    setDateOut("");
    setChangeChild("");
    setChangeRoom("");
    setChangeAdult("");
    setSelectRoom(false);
  };
  const handleDecrementRoom = () => {
    if (changeRoom >= 1) {
      setChangeRoom(prevRoom => {
        return prevRoom - 1;
      });
    } else {
      setChangeRoom(0);
    }
  };
  const handleIncrementRoom = () => {
    setChangeRoom(prevRoom => {
      return prevRoom + 1;
    });
  };
  const handleDecrementAdult = () => {
    if (changeAdult >= 1) {
      setChangeAdult(prevRoom => {
        return prevRoom - 1;
      });
    } else {
      setChangeAdult(0);
    }
  };
  const handleIncrementAdult = () => {
    setChangeAdult(prevRoom => {
      return prevRoom + 1;
    });
  };
  const handleDecrementChild = () => {
    if (changeChild >= 1) {
      setChangeChild(prevRoom => {
        return prevRoom - 1;
      });
    } else {
      setChangeChild(0);
    }
  };
  const handleIncrementChild = () => {
    setChangeChild(prevRoom => {
      return prevRoom + 1;
    });
  };
  const setChangeButton = e => {
    setChangeAdult(e.target.value);
    setChangeRoom(e.target.value);
    setChangeChild(e.target.value);
  };
  return (
    <div className="check-date">
      <div className="checked">
        <div className="guest">
          <p>Going to Glasgow, London, Manchester</p>
        </div>

        <div className="check-in">
          <DatePicker
            className="check-in"
            placeholderText="check-in date"
            selected={date}
            onChange={date => setDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
          />
        </div>
        <div className="check-out">
          <DatePicker
            className="check-out"
            placeholderText="check-out date"
            selected={dateOut}
            onChange={dateOut => setDateOut(dateOut)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
          />
        </div>
        <div className="check-room">
          <div>
            <button
              className="select"
              onChange={setChangeButton}
              onClick={showSelect}
            >
              <option>Select Room</option>
              {changeRoom}Room-{changeAdult}Adult-{changeChild}Child
            </button>
          </div>
        </div>
        <div className="check-btn">
          <Button type="submit" onClick={selectedDate}>
            Confirm
          </Button>
        </div>
        {selectRoom && (
          <div className="select-room">
            <div className="room">
              Adult <button onClick={handleDecrementRoom}>-</button>
              {changeRoom}
              <button onClick={handleIncrementRoom}>+</button>
            </div>
            <div className="adult">
              Child<button onClick={handleDecrementAdult}>-</button>
              {changeAdult}
              <button onClick={handleIncrementAdult}>+</button>
            </div>
            <div className="child">
              Room<button onClick={handleDecrementChild}>-</button>
              {changeChild}
              <button onClick={handleIncrementChild}>+</button>
            </div>
            <Button onClick={orderRoom} className="btn-choice">
              choice
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckDate;
