import React from "react";
// in this case the props will be that of an object containing people
// example:
/* 
{
    person1 : {
        id : 1,
        title : Ms,
        firstName : "firstPerson1",
        surname : "surPerson1",
        email : "person1@gmail.com",
        roomID : 126,
        checkInDate : "01/01/21",
        checkOutDate : "02/01/21",
    },
    person2 : {
        id : 2,
        title : Mr,
        firstName : "firstPerson2",
        surname : "surPerson2",
        email : "person2@gmail.com",
        roomID : 637,
        checkInDate : "03/01/21",
        checkOutDate : "01/02/21",
    }
}
*/
const SearchResults = props => {
  return (
    <table className="search-results-table">
      <tbody>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>Check In Date</th>
          <th>Check Out Date</th>
        </tr>

        {props.peopleArray.map(person => {
          return (
            <tr>
              <td>{person.id}</td>
              <td>{person.title}</td>
              <td>{person.firstName}</td>
              <td>{person.surname}</td>
              <td>{person.email}</td>
              <td>{person.roomID}</td>
              <td>{person.checkInDate}</td>
              <td>{person.checkOutDate}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default SearchResults;
