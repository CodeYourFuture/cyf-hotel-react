import moment from "moment";
import React, { useState } from "react";
import CustomerProfile from "./CustomerProfile";


const TableRow=(props)=>{
    const [selectedRow, setSelectedRow] = useState(null);
    const [showProfile, setShowProfile] = useState(false);
    const [customClass, setCustomClass] = useState("");

    let checkIn = moment(props.value.checkInDate, "YYYY-MM-DD")
    let checkOut = moment(props.value.checkOutDate , "YYYY-MM-DD")
    let rowClass = selectedRow === props.value.id ? customClass : "";          

    const toggleProfile = () => {
    setShowProfile((showProfile) => !showProfile);
  };

  function classHandler(rowId) {
    setSelectedRow(rowId);
    setCustomClass((oldCustomClass) => (oldCustomClass ? "" : "table-primary"));
  }
return (
    <>
    <tr key ={props.value.id}className={`text-center ${rowClass}` } onClick={()=> classHandler(props.value.id)}>
        <td>{props.value.id}</td>
        <td>{props.value.title}</td>
        <td>{props.value.firstName}</td>
        <td>{props.value.surname}</td>
        <td>{props.value.email}</td>
        <td>{props.value.roomId}</td>
        <td>{props.value.checkInDate}</td>
        <td>{props.value.checkOutDate}</td>
        <td>{moment(checkOut).diff(checkIn, "days")}</td>
        <th><button onClick={toggleProfile}>Show Profile</button></th>
    </tr>
    <tr>
    {showProfile && <CustomerProfile id={selectedRow} />}
    </tr>
    </>           
)
            
}
export default TableRow;