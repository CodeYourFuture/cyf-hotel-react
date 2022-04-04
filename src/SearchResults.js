import React from "react";
import "./App.css";
import TableRow from "./TableRow";

const SearchResult = (props) => {
  //const [highlight, setHighlight] = useState("false");

  // const selected = () => {
  //   setHighlight(!highlight);
  // };

  const dataArray = props.data;
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check Out Date</th>
          <th scope="col">Number of nights</th>
        </tr>
      </thead>
      <tbody>
        {dataArray.map((item) => {
          return <TableRow key={item.id} item={item} />;
        })}
      </tbody>
    </table>
  );
};

export default SearchResult;
