import React from "react";

const Tbody = data => {
  return (Tbody = (
    <tbody>
      {data.map(booker => {
        console.log(booker);

        <tr key={booker.id}>
          <th scope="row">{booker.id}</th>
          <td>{booker.id}</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>;
      })}
    </tbody>
  ));
};
export default Tbody;
