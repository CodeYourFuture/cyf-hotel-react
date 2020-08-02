import React, { useState } from "react";
import moment from "moment";
import Table from "react-bootstrap/Table";
import CutomerProfile from "./CustomerProfile";

const SearchResults = ({ results }) => {
  const [selected, setSelected] = useState([]);
  const [selectedId, setSelectedId] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  console.log(selectedId);
  const handelShowProfile = e => {
    e.preventDefault();
    setSelectedId(e.target.id);
    console.log(e.target.id);
  };

  const handleColourChange = index => {
    if (selected.includes(index)) {
      setSelected(selected.filter(p => p !== index)); // remove the second click // blue turn white
    } else {
      setSelected([...selected, index]); //  adds on to already exsisting arrays of selected, more white turns blue
      console.log(selected);
    }
  };
  return (
    <div>
      <Table className="table">
        <thead>
          <tr>
            {Object.keys(results[0]).map((customer, i) => {
              return <th key={i}>{customer}</th>;
            })}

            <th>Num Nights</th>
          </tr>
        </thead>
        <tbody>
          {results.map((customer, index) => {
            return (
              <tr
                key={index}
                style={
                  selected.includes(index)
                    ? { backgroundColor: "skyblue" }
                    : null
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
                  {moment(customer.checkOutDate).diff(
                    customer.checkInDate,
                    "days"
                  )}
                </td>
                <td>
                  {" "}
                  <button
                    className="btn btn-primary"
                    onClick={handelShowProfile}
                    id={index + 1}
                  >
                    Show Profile
                  </button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div>{!selectedId ? null : <CutomerProfile id={selectedId} />}</div>
    </div>
  );
};

export default SearchResults;
