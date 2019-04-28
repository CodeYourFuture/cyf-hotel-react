import React from "react";
import HighlightRow from "./HighlightRow";

const SearchResults = props => {
  //parameters are just other kinds of var's.

  //props is just the name of an object that holds lots of attributes.props= properties.
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>First Name </th>
          <th> Surname</th>
          <th>email </th>
          <th> roomId </th>
          <th>checkInDate </th>
          <th>checkOutDate </th>
          <th>Duration </th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(result => (
          <HighlightRow booking={result} />
        ))}
      </tbody>
    </table>
  );
  //object is the object that has a key which holds the value.

  // {results: Array(5), colour: "red", quanity: "5"}
  // colour: "red"
  // quanity: "5"
  // results: Array(5)
  // 0: {id: 1, title: "Mr", firstName: "John", surname: "Doe", email: "johndoe@doe.com", …}
  // 1: {id: 2, title: "Doctor", firstName: "Sadia", surname: "Begum", email: "begum_sadia@sadia.org", …}
  // 2: {id: 3, title: "Prince", firstName: "Henry", surname: "Wales", email: "harry@wales.com", …}
  // 3: {id: 4, title: "Dame", firstName: "Judi", surname: "Dench", email: "Judi@dench.co.uk", …}
  // 4: {id: 5, title: "Madam", firstName: "Anuradha", surname: "Selvam", email: "anu@selvam.net", …}
};

//only use js inside jsx (which looks like html).
//state is for keeping track or holding onto change.

export default SearchResults;
