import React from "react";
import SearchResult from "./SearchResult";
import moment from "moment";

const calculateTotalNights = (checkInDate, checkOutDate) => {
  const a = moment(checkInDate, "YYYY-MM-DD");
  const b = moment(checkOutDate, "YYYY-MM-DD");
  return b.diff(a, "days");
};

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
          {props.results.map(
            ({
              id,
              title,
              firstName,
              surname,
              email,
              roomId,
              checkInDate,
              checkOutDate,
            }) => (
              <SearchResult
                key={id}
                id={id}
                title={title}
                firstName={firstName}
                surname={surname}
                email={email}
                roomId={roomId}
                checkInDate={checkInDate}
                checkOutDate={checkOutDate}
                diff={calculateTotalNights(checkInDate, checkOutDate)}
                setCustomerId={props.setCustomerId}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OutcomeSearch;

// It is a React component called OutcomeSearch that renders a table displaying search results.
// The component imports the SearchResult component from the "./SearchResult" file and the moment
// library for date calculations. The code defines a helper function calculateTotalNights that takes
// checkInDate and checkOutDate as parameters. It uses the moment library to calculate the number
// of nights between the two dates. The function converts the date strings to moment objects and
// then uses the diff() method with the "days" unit to calculate the difference in days. Inside the
// OutcomeSearch component, a table is rendered with the class "table table-hover table-bordered".
// The table has a header row (thead) with columns representing different information about the
// search results, such as ID, Title, First Name, Last Name, Email, Room ID, Check-in Date, Check-out
// Date, Total Nights, and Profiles. The component uses the props.results.map() function to iterate
// over the results array passed as a prop. For each result object, it renders a SearchResult
// component, passing various props including id, title, firstName, surname, email, roomId,
// checkInDate, and checkOutDate. The key prop is set to the id value to provide a unique identifier
// for each result.

// The calculateTotalNights function is invoked within the map() function to calculate the diff
// (total nights) between the checkInDate and checkOutDate for each result. The diff value is then
// passed as a prop to the SearchResult component. The OutcomeSearch component also receives a
// setCustomerId prop, which is passed to the SearchResult component for further handling. Finally,
// the OutcomeSearch component is exported as the default export, allowing it to be imported and
// used in other parts of the application.
