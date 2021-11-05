import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

function SearchResults(props) {
  const [ishighlight, setishighlight] = useState(false);
  const [id, setId] = useState(1);
  function highlight() {
    setishighlight(!ishighlight);
  }

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col"> id</th>
            <th scope="col">title</th>
            <th scope="col"> first name</th>
            <th scope="col"> surname</th>
            <th scope="col"> email</th>
            <th scope="col"> room id</th>
            <th scope="col"> check in date</th>
            <th scope="col"> check out date</th>
            <th scope="col"> number of nights</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((result, index) => {
            return (
              <tr
                key={index}
                onClick={highlight}
                className={ishighlight ? "dark" : " "}
              >
                <td>{result.id}</td>
                <td>{result.title}</td>
                <td>{result.firstName}</td>
                <td>{result.surname}</td>
                <td>{result.email}</td>
                <td>{result.roomId}</td>
                <td>{result.checkInDate}</td>
                <td>{result.checkOutDate}</td>
                <td>
                  {moment(result.checkOutDate).diff(result.checkInDate, "day") +
                    " nights"}
                </td>

                <td>
                  <button onClick={() => setId(() => result.id)}>
                    Show profile
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <CustomerProfile id={id} />
    </div>
  );
}

export default SearchResults;
