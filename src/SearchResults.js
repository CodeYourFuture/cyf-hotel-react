import React from "react";
import moment from "moment";

const SearchResults = props => {
  return (
    <div id="SearchResults" className="SearchResults_CSS">
      <table>
        <thead>
          <tr>
            <th className="Head_TH_CSS">Title</th>
            <th className="Head_TH_CSS">First Name</th>
            <th className="Head_TH_CSS">Last Name</th>
            <th className="Head_TH_CSS">Email</th>
            <th className="Head_TH_CSS">Room id</th>
            <th className="Head_TH_CSS">Check in date</th>
            <th className="Head_TH_CSS">Check out date</th>
            <th className="Head_TH_CSS">Nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((el, index) => {
            return (
              <tr key={index}>
                <th scope="row" className="Table_TD_CSS">
                  {el.title}
                </th>
                <td className="Table_TD_CSS">{el.firstName}</td>
                <td className="Table_TD_CSS">{el.surname}</td>
                <td className="Table_TD_CSS">{el.email}</td>
                <td className="Table_TD_CSS">{el.roomId}</td>
                <td className="Table_TD_CSS">{el.checkInDate}</td>
                <td className="Table_TD_CSS">{el.checkOutDate}</td>
                <td className="Table_TD_CSS">
                  {moment(el.checkOutDate).diff(moment(el.checkInDate), "days")}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
