import React, { useState } from "react";
import moment from "moment";
const SearchResults = props => {
  const [isSelected, setIsSelected] = useState([]);
  const setClassName = id => {
    if (!isSelected.includes(id)) {
      setIsSelected([...isSelected, id]);
      //or
      // setIsSelected(isSelected.concat([id]))
    } else {
      setIsSelected(isSelected.filter(p => p !== id));
    }
  };

  return (
    <table className="table">
      <thead>
        <tr className="table-row">
          <th scope="col">ID</th>
          <th scope="col">title</th>
          <th scope="col">First name</th>
          <th scope="col">surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((data, index) => {
          return (
            <tr
              key={index}
              onClick={() => setClassName(index)}
              style={
                isSelected.includes(index)
                  ? {
                      backgroundColor: "cyan"
                    }
                  : { backgroundColor: "white" }
              }
            >
              <th scope="row">{data.id}</th>
              <td>{data.title}</td>
              <td>{data.firstName}</td>
              <td>{data.surname}</td>
              <td>{data.email}</td>
              <td>{data.roomId}</td>
              <td>{data.checkInDate}</td>
              <td>{data.checkOutDate}</td>
              <td>
                {moment(data.checkOutDate).diff(data.checkInDate, "days")}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
