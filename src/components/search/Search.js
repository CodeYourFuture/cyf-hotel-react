import React from 'react';
//import data from '../data/fakeBookings';
import Button from "./button.js";
import Input from "./Input.js";

let inputType = '';
const getInput = (event) => {
  inputType = event.target.value
}

const Search = ({ searchHandler }) => (
  <table className="table search-table">
    <thead>
      <tr>
        <th>Customer Id</th>
        <th />
        <th>Customer Name</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tr>
        <Input getInput={getInput} placeholder='Customer id' />
        <Button onClick={() => searchHandler(inputType)} value='Search Ids' />
        <Input getInput={getInput} placeholder='Customer Name' />
        <Button onClick={() => searchHandler(inputType)} value='Search Name' />
      </tr>
    </tbody>
  </table>
);

export default Search;
