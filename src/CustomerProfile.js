import { useEffect, useState } from "react";

function CustomerProfile (props) {
    let [userInfo, setUserInfo] = useState("");
    useEffect(() => {
        if(props.id) {
            fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
        .then((response) => response.json())
        .then((data) => setUserInfo(data));
    }}, [props.id]);
  
    return userInfo ?
    (
      <div>
        <ul>
          <li>
            <b>Client's ID: </b>
            {userInfo.id}
          </li>
          <li>
            <b>Client's email: </b>
            {userInfo.email}
          </li>
          <li>
            <b>VIP Client: </b>
            {userInfo.vip && "YES"}
          </li>
          <li>
            <b>Client's phone number: </b>
            {userInfo.phoneNumber}
          </li>
        </ul>
      </div>
    )
    : null
}

export default CustomerProfile;