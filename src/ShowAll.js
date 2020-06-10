import React from "react";
import SelectTable from "./SelectTable";

const ShowAll = props => {
  return (
    <div className="table">
      <table>
        <tr>
          <th />
          <th scope="co1"> Title </th>
          <th scope="co1"> First Name </th>
          <th scope="co1"> SureName </th>
          <th scope="co1"> Email </th>
          <th scope="co1"> Room </th>
          <th scope="co1"> CheckInDate </th>
          <th scope="co1"> CheckOutDate </th>
          <th scope="co1"> Nights </th>
        </tr>
        {props.data.map((booking, index) => {
          return <SelectTable booking={booking} key={index} />;
        })}
      </table>
    </div>
  );
};

export default ShowAll;
