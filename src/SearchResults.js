import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ results }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  // const [ids, setIds] = useState([]);
  const [url, setUrl] = useState("");

  // const highlighted = (id) => {
  //   selectedRows.includes(id)
  //     ? setSelectedRows(selectedRows.filter((el) => el !== id))
  //     : setSelectedRows(selectedRows.concat(id));
  // };

  const handleId = id => {
    // id.includes(id)
    //   ? setIds(ids.filter((el) => el !== id))
    //   : setIds(ids.concat(id));
    selectedRows.includes(id)
      ? setSelectedRows(selectedRows.filter(el => el !== id))
      : setSelectedRows(selectedRows.concat(id));
  };

  const profileHandler = id => {
    setUrl(`https://cyf-react.glitch.me/customers/${id}/`);
  };

  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">No. of nights</th>
          <th scope="col" />
          <th scope="col" />
        </tr>
      </thead>
      <tbody>
        {results.map(el => (
          <tr
            key={el.id}
            onClick={() => {
              // highlighted(el.id);
              handleId(el.id);
            }}
            className={selectedRows.includes(el.id) ? "select" : "unSelect"}
            style={
              selectedRows.includes(el.id)
                ? { background: "#007bff", color: "white" }
                : { background: "white" }
            }
          >
            {Object.values(el).map((item, index) => (
              <td key={index}>{item}</td>
            ))}
            <td key={Object.keys(el).length - 1}>
              {moment(el.checkOutDate).diff(moment(el.checkInDate), "days")}
            </td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => {
                  profileHandler(el.id);
                }}
              >
                Show profile
              </button>
            </td>
            <td>
              <CustomerProfile url={url} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
