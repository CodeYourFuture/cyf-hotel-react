import React, { useState } from "react";
import moment from "moment";

const SearchResults = props => {
  const [selected, setSelected] = useState(-1);

  const changeColor = index => {
    setSelected(index);

    console.log(changeColor);
  };
  return (
    <>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">First</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">The number of nights</th>
            <th scope="col">Show profile</th>
          </tr>
        </thead>

        <tbody>
          {props.result.map((lista, index) => {
            var a = moment(lista.checkOutDate);
            var b = moment(lista.checkInDate);

            return (
              <tr
                key={index}
                onClick={() => changeColor(index)}
                className={selected === index ? "selected" : ""}
              >
                <th>{lista.id}</th>
                <th>{lista.firstName}</th>
                <th>{lista.surname}</th>
                <th>{lista.email}</th>
                <th>{lista.roomId}</th>
                <th>{lista.checkInDate};</th>
                <th>{lista.checkOutDate}</th>
                <th>{a.diff(b, "days")}</th>
                <td>
                  <button onClick={() => props.ClickId(lista.id)}>
                    Show profile
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default SearchResults;
