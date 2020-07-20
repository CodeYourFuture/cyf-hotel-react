import React from "react";
import Moment from "react-moment";
import moment from "moment";

const SearchResults = props => {
  return (
    <div className="table-responsive-sm">
      <table className="table table-bordered">
        <thead className="table-primary fontColor">
          <tr
            onClick={e => {
              if (e.currentTarget.classList.contains("highLight")) {
                e.currentTarget.classList.remove("highLight");
              } else {
                e.currentTarget.classList.add("highLight");
              }
              // const [isClicked, setIsClicked] = useState(true);
            }}
          >
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Firstname</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Duration of stay </th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(result => {
            return (
              <tr
                onClick={e => {
                  if (e.currentTarget.classList.contains("highLight")) {
                    e.currentTarget.classList.remove("highLight");
                  } else {
                    e.currentTarget.classList.add("highLight");
                  }
                }}
              >
                <th scope="row">{result.id}</th>
                <td>{result.title}</td>
                <td>{result.firstName}</td>
                <td>{result.surname}</td>
                <td>{result.email}</td>
                <td>{result.roomId}</td>
                <td>{result.checkInDate}</td>
                <td>{result.checkOutDate}</td>
                <td>
                  {moment(result.checkOutDate).diff(result.checkInDate, "days")}
                  {/* <Moment diff={result.checkInDate} unit="days">
                    {result.checkOutDate}
                  </Moment> */}
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
