import React from 'react';
import Button from "./Button.js";
import TextInput from "./TextInput.js";
import Counter from './counter.js';



const CustomerName = (props) =>
<div className="col">
<table className="table search-table">
  <thead>
    <tr>
      <th>Customer Name</th>
      <th />
      <th> Customer Id</th>
      <th />
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <TextInput id="customerName"  message="Enter Your Name" name="customerName" />
        <Counter onClick={props.result.length}/>
      </td>
      <td>
        <Button onClick={props.onSearch} button="Search Name"/>
      </td>
      <td>
        <TextInput id="customerId" message="Enter Your id" name="customerId" />
      </td>
      <td>
        <Button  button="Search Id"/>
      </td>
    </tr>
  </tbody>
</table>
</div>

export default CustomerName;