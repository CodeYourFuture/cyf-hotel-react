import React from "react";

const SearchResults = props => {
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">first name</th>
            <th scope="col">surname</th>
            <th scope="col">email</th>
            <th scope="col">room id</th>
            <th scope="col">check in date</th>
            <th scope="col">check out date</th>
          </tr>
        </thead>
        <tbody className="bodyClass">
          {props.fakes.map((person, index) => {
            return (
              <tr key={index}>
                <td>{person.id}</td>
                <td>{person.title}</td>
                <td>{person.firstName}</td>
                <td>{person.surname}</td>
                <td>{person.email}</td>
                <td>{person.roomId}</td>
                <td>{person.checkInDate}</td>
                <td>{person.checkOutDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* <table class="table">
        <thead class="thead-light"> */}
    </div>
  );
};

export default SearchResults;
