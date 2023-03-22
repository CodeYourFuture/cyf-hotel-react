import React, { useState } from "react";
import moment from "moment";

function SearchDetails({ detail, updateProfile, customerProfile }) {
  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected(!selected);
    
  }

  function fetchProfileData() {
  //   fetch(`https://cyf-react.glitch.me/customers/${detail.id}`, {
  //   mode: 'no-cors'
  // })
  //     .then(response => response.json())
  //     .then(data => updateProfile(data))
  //     .catch(error => {
  //       console.log( "found error ", error );
  //     });

  fetch(`https://temporary-cyf-react.onrender.com/${detail.id}`)
    .then((response) => {
        // console.log("json: ", response.json());
        return response.json();                
    })
    .then(data => {
        updateProfile(data)
        console.log("data: ", data);
      
    }).catch(error => {
        console.log("found error: ", error);
    });
  }

  return (
    <tr
      key={detail.id}
      onClick={handleClick}
      style={{backgroundColor:selected? "lightblue":"white"}}
    >
      <td>{detail.id}</td>
      <td>{detail.title}</td>
      <td>{detail.firstName}</td>
      <td>{detail.surname}</td>
      <td>{detail.email}</td>
      <td>{detail.roomId}</td>
      <td>{detail.checkInDate}</td>
      <td>{detail.checkOutDate}</td>
      <td>{moment(detail.checkOutDate).diff(detail.checkInDate, "days")}</td>
      <td>
        <button
          className="btn btn-primary"
          onClick={() => {
            customerProfile(detail.id);
            fetchProfileData();
          }}
        >
          Show Profile
        </button>
      </td>
    </tr>
  );
}

export default SearchDetails;