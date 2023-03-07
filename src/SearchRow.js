import React, {useState} from "react";
import moment from 'moment';

function SearchRow (props){
    const [colour, setColour] = useState("")

    function NewColor () { 
        setColour(colour ? "" : 'newTrColor')
    }
    
    return (
        <tr className = {colour} onClick = {NewColor}>
          <td scope="row">{props.guest.id}</td>
          <td>{props.guest.title}</td>
          <td>{props.guest.firstName}</td>
          <td>{props.guest.surname}</td>
          <td>{props.guest.email}</td>
          <td>{props.guest.roomId}</td>
          <td>{props.guest.checkInDate}</td>
          <td>{props.guest.checkOutDate}</td>
          <td>{moment(props.guest.checkOutDate).diff(moment(props.guest.checkInDate), 'days')}</td>
        </tr>
      )
}

export default SearchRow