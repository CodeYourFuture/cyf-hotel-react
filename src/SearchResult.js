import Moment from "react-moment";
import { useState } from "react";
function SearchResult({ i, booking, showProfile }) {
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
      <th scope="row">{booking.id}</th>
      <td>{booking.title}</td>
      <td>{booking.firstName}</td>
      <td>{booking.surname}</td>
      <td>{booking.email}</td>
      <td>{booking.roomId}</td>
      <td>
        <Moment format="DD-MM-YYYY">{booking.checkInDate}</Moment>
      </td>
      <td>
        <Moment format="DD-MM-YYYY">{booking.checkOutDate}</Moment>
      </td>
      <td>
        <Moment diff={booking.checkInDate} unit="days">
          {booking.checkOutDate}
        </Moment>
      </td>
      <td>
        <button onClick={() => showProfile(booking.id)}>Show profile</button>
      </td>
    </tr>
  );
}
export default SearchResult;
