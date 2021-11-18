import React from 'react'

function SearchResultsHeading() {
    return (
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check-in Date</th>
          <th scope="col">Check-out Date</th>
          <th scope="col">Staying Night</th>
          <th scope="col" />
        </tr>
      </thead>
    );
}

export default SearchResultsHeading
