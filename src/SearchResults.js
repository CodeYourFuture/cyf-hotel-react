import React from "react";
import moment from "moment";

const SearchResults = props => {
  /*const results = [
    {
      id: "675",
      title: "ddd",
      Lastname: "hhgg",
      email: "hgbgvgg",
      roomid: "hgg",
      checkindate: "15/5/2020",
      checkoutdate: "15/7/20",
    },
    {
      id: "675",
      title: "ccc",
      Lastname: "hhgg",
      email: "hgbgvgg",
      roomid: "hgg",
      checkindate: "15/5/2020",
      checkoutdate: "15/7/20",
    },
    {
      id: "675",
      title: "bbb",
      Lastname: "hhgg",
      email: "hgbgvgg",
      roomid: "hgg",
      checkindate: "15/5/2020",
      checkoutdate: "15/7/20",
    },
  ];*/

  return (
    <div className="tablesearch">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>id</th>
            <th>title</th>
            <th>LastName</th>
            <th>email</th>
            <th>room id</th>
            <th />
            <th>check in date</th>
            <th>check out date</th>
            <th>number of days</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((result, i) => (
            <tr key={i}>
              <td>{result.id}</td>
              <td>{result.title}</td>
              <td>{result.surname}</td>
              <td>{result.roomId}</td>
              <td>{result.email}</td>
              <td>{result.roomid}</td>
              <td>{result.checkInDate}</td>
              <td>{result.checkOutDate}</td>
              <td>
                {moment(result.checkOutDate).diff(
                  moment(result.checkInDate),
                  "days"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
