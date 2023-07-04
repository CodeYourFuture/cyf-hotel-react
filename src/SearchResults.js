import React, { useEffect, useState } from "react";
import CustomerProfile from "./CustomerProfile";
import Nights from "./Nights";

const SearchResults = ({ results }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [customerData, setCustomerData] = useState(null);

  useEffect(() => {
    if (selectedRow) {
      fetch(`https://temporary-cyf-react.onrender.com/customers/${selectedRow}`)
        .then((response) => response.json())
        .then((data) => setCustomerData(data));
    }
  }, [selectedRow]);

  const handleRowClick = (id) => {
    if (id === selectedRow) {
      setSelectedRow(null);
      setCustomerData(null);
    } else {
      setSelectedRow(id);
    }
  };
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check In Date</th>
            <th scope="col">Check Out Date</th>
            <th scope="col">Number Of Nights</th>
            <th scope="col">Show Profile</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => {
            return (
              <tr
                key={result.id}
                className={result.id === selectedRow ? "selected-color" : ""}
                onClick={() => handleRowClick(result.id)}
              >
                <td>{result.id}</td>
                <td>{result.title}</td>
                <td>{result.firstName}</td>
                <td>{result.surname}</td>
                <td>{result.email}</td>
                <td>{result.roomId}</td>
                <td>{result.checkInDate}</td>
                <td>{result.checkOutDate}</td>
                <td>
                  {Nights({
                    checkInDate: result.checkInDate,
                    checkOutDate: result.checkOutDate,
                  })}
                </td>
                <td>
                  <button onClick={handleRowClick}>Show Profile</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {customerData && (
        <CustomerProfile
          id={customerData.id}
          title={customerData.title}
          firstName={customerData.firstName}
          surname={customerData.surname}
          email={customerData.email}
          vip={customerData.vip}
          phoneNumber={customerData.phoneNumber}
        />
      )}
    </div>
  );
};

export default SearchResults;
