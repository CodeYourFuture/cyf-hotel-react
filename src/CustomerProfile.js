// import  Axios from 'axios';
import React, { useEffect, useState } from "react";

const CustomerProfile = (props) => {
  const [showDataProfile, setShowDataProfile] = useState("");
  const idApi = `https://cyf-react.glitch.me/customers/${props.id}`;

  useEffect(() => {
    if (props.id) {
      fetch(idApi)
        .then((response) => response.json())
        .then((data) => setShowDataProfile(data));
    }
    }, [props.id]);
    return (
        <div className="customer-profile">
        {props.id !== "" ? <h1> Customer Profile</h1> : <></>}
        {props.id !== "" ? (
            <ul>
                <li>Id: {showDataProfile.id}</li>
                <li>Vip: {showDataProfile.vip ? "Yes" : "No"}</li>
                <li>
                    Full Name: {showDataProfile.firstName} {showDataProfile.surname}
                </li>
                <li>Email: {showDataProfile.email}</li>
                <li>Phone no: {showDataProfile.phoneNumber}</li>
            </ul>
        ) : (
            <></>
        )}
        </div>
    );
};

export default CustomerProfile;
