import Moment from "react-moment";
import { useState } from "react";
function SearchResult({ i, item }) {
  const [select, setSelect] = useState(true);
  const toggleSelecter = () => {
    setSelect(select => !select);
  };
  return (
    <tr
      key={i}
      onClick={toggleSelecter}
      style={{
        backgroundColor: select ? "white" : "blue",
        color: select ? "black" : "white"
      }}
    >
      <th scope="row">{item.id}</th>
      <td>{item.title}</td>
      <td>{item.firstName}</td>
      <td>{item.surname}</td>
      <td>{item.email}</td>
      <td>{item.roomId}</td>
      <td>
        <Moment format="DD-MM-YYYY">{item.checkInDate}</Moment>
      </td>
      <td>
        <Moment format="DD-MM-YYYY">{item.checkOutDate}</Moment>
      </td>
      <td>
        <Moment diff={item.checkInDate} unit="days">
          {item.checkOutDate}
        </Moment>
      </td>
    </tr>
  );
}
export default SearchResult;
