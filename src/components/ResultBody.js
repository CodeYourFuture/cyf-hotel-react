import React from "react";

const ResultBody = ({data}) => {
  return (
    <tbody>
      {data.map(item => (
        <tr>
          <td>{item.tittle}</td>
          <td>{item.firstname}</td>
          <td>{item.surname}</td>
          <td>{item.email}</td>

          <td>{item.room_id}</td>
          <td>{item.check_in_date}</td>
          <td>{item.check_out_date}</td>
          <td>
          {item.duration}
          </td>
        </tr>
      ))}
    </tbody>
  );
};
export default ResultBody;
