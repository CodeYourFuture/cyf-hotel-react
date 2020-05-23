import React from "react";

const SearchResults = () => {
  return (
    <table className="table">
      <thead className="thead-light">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mr</td>
          <td>Person 1</td>
          <td>Else</td>
          <td>Person1@else.com</td>
          <td>1</td>
          <td>2019-11-21</td>
          <td>2019-11-28</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Ms</td>
          <td>Person 2</td>
          <td>Else</td>
          <td>Person2@else.com</td>
          <td>2</td>
          <td>2019-11-21</td>
          <td>2019-11-28</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Mrs</td>
          <td>Person 3</td>
          <td>Else</td>
          <td>Person3@else.com</td>
          <td>3</td>
          <td>2019-11-21</td>
          <td>2019-11-28</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Mr</td>
          <td>Person 4</td>
          <td>Else</td>
          <td>Person4@else.com</td>
          <td>4</td>
          <td>2019-11-21</td>
          <td>2019-11-28</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Mrs</td>
          <td>Person 5</td>
          <td>Else</td>
          <td>Person5@else.com</td>
          <td>5</td>
          <td>2019-11-21</td>
          <td>2019-11-28</td>
        </tr>
      </tbody>
    </table>
  );
};

export default SearchResults;
