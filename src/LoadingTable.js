import React from "react";

function LoadingTable(props) {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Room id</th>
            <th scope="col">Check in date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Number of nights</th>
            <th scope="col">Customer Profile</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {props.error && (
              <td className="error-message" colSpan="100">
                {props.error.message}
              </td>
            )}
            {props.loading && (
              <td className="loading-message" colSpan="100">
                Loading...
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LoadingTable;
