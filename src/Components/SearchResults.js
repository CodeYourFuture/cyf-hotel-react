import React, { useState, useEffect } from "react";
import Columns from "../Components/Table/Columns";
import Row from "./Table/Row";
import CustomerProfile from "./Table/CustomerProfile";

const SearchResults = ({ data, loading, error, setBookings }) => {
  const [isShow, setIsShow] = useState(null);
  const [customerData, setCustomerData] = useState([]);
  const [sort, setSort] = useState(true);
  useEffect(() => {
    fetch("https://cyf-react.illicitonion.com/customers/" + isShow)
      .then(res => res.json())
      .then(data => setCustomerData(data))
      .catch(error => console.log(error));
  }, [isShow]);

  function errorData() {
    return (
      <div className="error">
        <p>404</p>
        <h1>Sorry!</h1>
        <p>Something went wrong!</p>
      </div>
    );
  }
  function sortInColumns(value) {
    switch (value) {
      case "id":
        if (sort) {
          const sortById = [...data].sort((a, b) => (a.id < b.id ? -1 : 1));
          setBookings(sortById);
        } else {
          const sortById = [...data].sort((a, b) => (a.id > b.id ? -1 : 1));
          setBookings(sortById);
        }
        break;
      case "title":
        if (sort) {
          const sortByTitle = [...data].sort((a, b) =>
            a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
          );
          setBookings(sortByTitle);
        } else {
          const sortByTitle = [...data].sort((a, b) =>
            a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1
          );
          setBookings(sortByTitle);
        }
        break;
      case "firstName":
        if (sort) {
          const sortByFirstName = [...data].sort((a, b) =>
            a.firstName.toLowerCase() < b.firstName.toLowerCase() ? -1 : 1
          );
          setBookings(sortByFirstName);
        } else {
          const sortByFirstName = [...data].sort((a, b) =>
            a.firstName.toLowerCase() > b.firstName.toLowerCase() ? -1 : 1
          );
          setBookings(sortByFirstName);
        }
        break;
      case "surname":
        if (sort) {
          const sortBySurname = [...data].sort((a, b) =>
            a.surname.toLowerCase() < b.surname.toLowerCase() ? -1 : 1
          );
          setBookings(sortBySurname);
        } else {
          const sortBySurname = [...data].sort((a, b) =>
            a.surname.toLowerCase() > b.surname.toLowerCase() ? -1 : 1
          );
          setBookings(sortBySurname);
        }
        break;
      case "email":
        if (sort) {
          const sortByEmail = [...data].sort((a, b) =>
            a.email.toLowerCase() < b.email.toLowerCase() ? -1 : 1
          );
          setBookings(sortByEmail);
        } else {
          const sortByEmail = [...data].sort((a, b) =>
            a.email.toLowerCase() > b.email.toLowerCase() ? -1 : 1
          );
          setBookings(sortByEmail);
        }
        break;
      case "roomId":
        if (sort) {
          const sortByRoomId = [...data].sort((a, b) =>
            a.roomId < b.roomId ? -1 : 1
          );
          setBookings(sortByRoomId);
        } else {
          const sortByRoomId = [...data].sort((a, b) =>
            a.roomId > b.roomId ? -1 : 1
          );
          setBookings(sortByRoomId);
        }
        break;
      case "checkIn":
        if (sort) {
          const sortByCheckInDate = [...data].sort((a, b) =>
            a.checkInDate < b.checkInDate ? -1 : 1
          );
          setBookings(sortByCheckInDate);
        } else {
          const sortByCheckInDate = [...data].sort((a, b) =>
            a.checkInDate > b.checkInDate ? -1 : 1
          );
          setBookings(sortByCheckInDate);
        }
        break;
      case "checkOut":
        if (sort) {
          const sortByCheckOutDate = [...data].sort((a, b) =>
            a.checkOutDate < b.checkOutDate ? -1 : 1
          );
          setBookings(sortByCheckOutDate);
        } else {
          const sortByCheckOutDate = [...data].sort((a, b) =>
            a.checkOutDate > b.checkOutDate ? -1 : 1
          );
          setBookings(sortByCheckOutDate);
        }
        break;
      // case "nights":
      //   if (sort) {
      //     const sortByCheckOutDate = [...data].sort((a, b) =>
      //       a.checkOutDate < b.checkOutDate ? -1 : 1
      //     );
      //     setBookings(sortByCheckOutDate);
      //   } else {
      //     const sortByCheckOutDate = [...data].sort((a, b) =>
      //       a.checkOutDate > b.checkOutDate ? -1 : 1
      //     );
      //     setBookings(sortByCheckOutDate);
      //   }
      //   break;
      default:
        const sortById = [...data].sort((a, b) => (a.id < b.id ? -1 : 1));
        setBookings(sortById);
    }
    setSort(!sort);
  }
  return (
    <div>
      {error && errorData()}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <table className="table table-responsive">
            <Columns data={data} sortInColumns={sortInColumns} />

            <tbody>
              {data.map(booking => {
                return (
                  <Row data={booking} key={booking.id} setIsShow={setIsShow} />
                );
              })}
            </tbody>
          </table>

          <CustomerProfile
            id={isShow}
            data={customerData}
            setIsShow={setIsShow}
          />
        </>
      )}
    </div>
  );
};

export default SearchResults;
