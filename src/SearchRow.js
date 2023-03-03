import React, {useState} from "react";

function SearchRow (props){
    const [selected, SetColour] = useState("")

    function NewColor () { 
        SetColour(selected ? "" : 'newTrColor')
    }
    
    return (
        <tr className = {selected} onClick = {NewColor}>
          <td scope="row">{props.id}</td>
          <td>{props.title}</td>
          <td>{props.firstName}</td>
          <td>{props.surname}</td>
          <td>{props.email}</td>
          <td>{props.roomId}</td>
          <td>{props.checkInDate}</td>
          <td>{props.checkOutDate}</td>
          <td>{props.diff}</td>
        </tr>
      )
}

export default SearchRow