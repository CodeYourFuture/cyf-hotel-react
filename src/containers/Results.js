import React from "react";

function Results() {
  return (
    <table>
      <tr width= "100px" >
        <th> Title </th>
        <th> First name </th>
        <th> Surname </th>
        <th> Email </th>
        <th> Room id </th>
      </tr>
      <tr>
        <td> Mr </td>
        <td> Person1 </td>
        <td> Else </td>
        <td> Person1@else.com </td>
        <td> 1 </td>
      </tr>
      <tr>
        <td> Mrs </td>
        <td> Person2 </td>
        <td> Else </td>
        <td> Person2@else.com </td>
        <td> 2 </td>
      </tr>
    </table>
  );
}

export default Results;