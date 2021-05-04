import React, { useState } from "react";
import moment from "moment";

const SearchResults = props => {
  const [isClicked, setIsClicked] = useState(null);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">first name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
          <th scope="col">Nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((x, index) => {
          function onClickHandler() {
            setIsClicked(isClicked === x.id);
            console.log(isClicked === x.id);
          }
          return (
            <tr
              key={index}
              onClick={onClickHandler}
              className={isClicked ? "rowColour" : null}
              row={isClicked}
            >
              <th scope="row">{x.id}</th>
              <td>{x.title}</td>
              <td>{x.firstName}</td>
              <td>{x.surname}</td>
              <td>{x.email}</td>
              <td>{x.roomId}</td>
              <td>{x.checkInDate}</td>
              <td>{x.checkOutDate}</td>
              <td>
                {moment(x.checkOutDate).diff(moment(x.checkInDate), "days")}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
