import React from "react";
import TableTitle from "./TableTitle";
import FirstName from "./FirstName";

const TableBody = ({ data }) => {
  return (
    <div>
      {data.map(e => {
        return (
          <div>
            <tr>
              <th scope="row">{e.id}</th>
              <TableTitle data={data} />
              {/* <FirstName data={data}/> */}
              {/* <td>{e.title}</td>
                    <td>{e.firstName}</td>
                    <td>{e.surname}</td>
                    <td>{e.email}</td>
                    <td>{e.roomId}</td>
                    <td>{e.checkInDate}</td>
                    <td>{e.checkOutDate}</td> */}
            </tr>
          </div>
        );
      })}
    </div>
  );
};

export default TableBody;
