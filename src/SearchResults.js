import React from "react";

const SearchResults = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check-in Date</th>
          <th scope="col">Check-out Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mr</td>
          <td>Otto</td>
          <td>Mann</td>
          <td />
          <td>37</td>
          <td>27/10/21</td>
          <td>29/10/21</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Mrs</td>
          <td>Agnes</td>
          <td>Skinner</td>
          <td />
          <td>24</td>
          <td>27/10/21</td>
          <td>29/10/21</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Rabbi</td>
          <td>Hyman</td>
          <td>Krustofsky</td>
          <td />
          <td>42</td>
          <td>27/10/21</td>
          <td>29/10/21</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SearchResults;
