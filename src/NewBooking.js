import { React, useState, useEffect } from "react";
export default function NewBooking(props) {
  const occupiedRoomId = props.bookingData.map(elm => elm["roomId"]);
  const [availableRoomId, setAvailableRoomId] = useState([]);
  const [id, setId] = useState(0);
  //   for (let i = 1; i < 10; i++) {
  //     var tempArray = [];
  //     if (!occupiedRoomId.includes(i)) {
  //       tempArray.push(i);
  //     }
  //   }
  //   setAvailableRoomId([...tempArray]);
  //   console.log(availableRoomId);
  return (
    <div>
      Title
      <select className="form-select" aria-label="Default select example">
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Ms">Ms</option>
        <option value="Other">Other</option>
      </select>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="">
            First and last name
          </span>
        </div>
        <input type="text" className="form-control" />
        <input type="text" className="form-control" />
      </div>
      Room Id
      <p style={{ color: `red` }}> This section is under construction</p>
    </div>
  );
}
