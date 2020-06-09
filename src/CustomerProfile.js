import React, { useState, useEffect } from "react";
function CustomerProfile(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => setData(data));
  }, [props.id]);

  return (
    <div className="bg-warning text-white m-4 ">
      <ul className="list-group list-unstyled">
        <h3>CustomerProfile</h3>
        <li className="list-group-item-success text-center">id: {data.id}</li>
        <li className="list-group-item-success text-center ">
          email: {data.email}
        </li>
        {data.vip && (
          <li className="list-group-item-success text-center">
            phoneNumber: {data.phoneNumber}
          </li>
        )}
      </ul>
    </div>
  );
}
export default CustomerProfile;
