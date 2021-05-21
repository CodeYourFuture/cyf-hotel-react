import moment from "moment";
import React from "react";
const SearchResults = props => {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th key="1" scope="col">
              id
            </th>
            <th key="2" scope="col">
              title
            </th>
            <th key="3" scope="col">
              first name
            </th>
            <th key="4" scope="col">
              surname
            </th>
            <th key="5" scope="col">
              email
            </th>
            <th key="6" scope="col">
              room id
            </th>
            <th key="7" scope="col">
              check in date
            </th>
            <th key="8" scope="col">
              check out date
            </th>
            <th key="9" scope="col">
              number of nights
            </th>
          </tr>
        </thead>
        <tbody>
          {props.customerData.map((item, index) => {
            let dateOut = item.checkOutDate;
            let dateIn = item.checkInDate;
            let nights = moment
              .utc(
                moment(dateOut, "YYYY-MM-DD").diff(moment(dateIn, "YYYY-MM-DD"))
              )
              .format("D");

            return (
              <tr key={index + 1}>
                <th key={index + 2} scope="row">
                  {item.id}
                </th>
                <td key={index + 3}>{item.title}</td>
                <td key={index + 4}>{item.firstName}</td>
                <td key={index + 5}>{item.surname}</td>
                <td key={index + 6}>{item.email}</td>
                <td key={index + 7}>{item.roomId}</td>
                <td key={index + 8}>{item.checkInDate}</td>
                <td key={index + 9}>{item.checkOutDate}</td>
                <td key={index + 10}>{nights - 1}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
