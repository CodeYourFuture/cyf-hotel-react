import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import CustomerProfile from "./CustomerProfile.js";
import LoadingMessage from "./LoadingMessage.js";
import ErrorMsg from "./ErrorMsg.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [data, setData] = useState(null);
  const [customerBk, setCustomerBk] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [title, setTitle] = useState("");
  const [roomId, setRoomId] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  function customerProfileBk(id) {
    setCustomerBk(id);
  }

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me`)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("HTTP error");
        }
      })
      .then(data => {
        setData(data);
        setBookings(data);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        setIsError(error);
      });
  }, []);

  // TO SHOW ERROR MESSAGE
  if (isError) {
    return <ErrorMsg />;
  }

  // TO SHOW LOADING MESSAGE
  if (isLoading) {
    return <LoadingMessage />;
  }

  // TO SEARCH BOOKINGS
  const search = searchVal => {
    setBookings(
      data.filter(el => {
        return (
          el.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          el.surname.toLowerCase().includes(searchVal.toLowerCase())
        );
      })
    );
  };

  // FOR NEW ENTRIES
  const handleNewEntry = e => {
    e.preventDefault();

    const newForm = {
      id: +id,
      title,
      firstName,
      surname,
      roomId,
      checkInDate,
      checkOutDate
    };

    setBookings([...bookings, newForm]);
  };

  //FOR SORTING ORDER OF THE BOOKING INFO
  function sortOrder(column, order) {
    if (column == "id") {
      const dataSame = [...data];
      if (order) {
        dataSame.sort((a, b) => {
          if (a.id > b.id) {
            return -1;
          }
          if (a.id < b.id) {
            return 1;
          }
          return 0;
        });
      } else {
        dataSame.sort((a, b) => {
          if (a.id < b.id) {
            return -1;
          }
          if (a.id > b.id) {
            return 1;
          }
          return 0;
        });
      }

      setBookings(dataSame);
    }
  }

  return (
    <>
      <div className="App-content">
        <div className="container">
          <Search search={search} />
          <SearchResults
            bkings={bookings}
            customerProfileBk={customerProfileBk}
            sortOrder={sortOrder}
          />
          <CustomerProfile customerBk={customerBk} />
        </div>
      </div>

      <form onSubmit={handleNewEntry}>
        <fieldset className="form-group">
          <br />
          <br />
          <br />
          <h3 className="exampleFormControlFile1">Create new booking</h3>
          Id:
          <input
            type="text"
            className="form-control-file"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          Title:{" "}
          <input
            type="text"
            className="form-control-file"
            value={title}
            onChange={e => {
              setTitle(e.target.value);
            }}
          />
          Name:{" "}
          <input
            type="text"
            className="form-control-file"
            value={firstName}
            onChange={e => {
              setFirstName(e.target.value);
            }}
          />
          Surname:{" "}
          <input
            type="text"
            className="form-control-file"
            value={surname}
            onChange={e => {
              setSurname(e.target.value);
            }}
          />
          Room Id:{" "}
          <input
            type="numbers"
            className="form-control-file"
            value={roomId}
            onChange={e => {
              setRoomId(e.target.value);
            }}
          />
          Check in date:
          <input
            type="numbers"
            className="form-control-file"
            value={checkInDate}
            onChange={e => {
              setCheckInDate(e.target.value);
            }}
          />
          Check out date:{" "}
          <input
            type="numbers"
            className="form-control-file"
            value={checkOutDate}
            onChange={e => {
              setCheckOutDate(e.target.value);
            }}
          />
          <br />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
          <br />
          <br />
        </fieldset>
      </form>
    </>
  );
};

export default Bookings;
