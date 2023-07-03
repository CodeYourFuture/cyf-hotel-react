import React from "react";
import SearchResult from "./SearchResult";
import moment from "moment";

const OutcomeSearch = (props) => {
  return (
    <div className="table-responsive">
      <table className="table table-hover table-bordered">
        <thead className="thead-dark">
          <tr className="text-center">
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check in Date</th>
            <th scope="col">Check out Date</th>
            <th scope="col">Total Nights</th>
            <th scope="col">Profiles</th>
          </tr>
        </thead>
        <tbody>
          {props.results.map((user) => {
            let a = moment(user.checkInDate, "YYYY-MM-DD");
            let b = moment(user.checkOutDate, "YYYY-MM-DD");
            return (
              <SearchResult
                key={user.id}
                id={user.id}
                title={user.title}
                firstName={user.firstName}
                surname={user.surname}
                email={user.email}
                roomId={user.roomId}
                checkInDate={user.checkInDate}
                checkOutDate={user.checkOutDate}
                diff={b.diff(a, "days")}
                setCustomerId={props.setCustomerId}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OutcomeSearch;
