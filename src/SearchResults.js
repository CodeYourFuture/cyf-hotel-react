import React, { useState } from "react";
import moment from "moment";
import Table from "react-bootstrap/Table";

const SearchResults = ({ results }) => {
  const [selected, setSelected] = useState([]);

  const handleColourChange = index => {
    if (selected.includes(index)) {
      setSelected(selected.filter(p => p !== index)); // remove the second click // blue turn white
    } else {
      setSelected([...selected, index]); //  adds on to already exsisting arrays of selected, more white turns blue
      console.log(selected);
    }
  };
  return (
    <Table className="table">
      <thead>
        <tr>
          {Object.keys(results[0]).map((customer, i) => {
            return <th key={i}>{customer}</th>;
          })}

          <th>Num Nights</th>
        </tr>
      </thead>
      {results.map((customer, index) => {
        return (
          <tr
            key={index}
            style={
              selected.includes(index) ? { backgroundColor: "skyblue" } : null
            }
            onClick={() => handleColourChange(index)}
          >
            <td key={customer.id.toString()}>{customer.id}</td>
            <td>{customer.title} </td>
            <td>{customer.firstName}</td>
            <td>{customer.surname}</td>
            <td>{customer.email}</td>
            <td>{customer.roomId}</td>
            <td>{customer.checkInDate}</td>
            <td>{customer.checkOutDate}</td>
            <td>
              {moment(customer.checkOutDate).diff(customer.checkInDate, "days")}
            </td>
          </tr>
        );
      })}
    </Table>
  );
};

export default SearchResults;
