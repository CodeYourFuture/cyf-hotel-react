import React, { useState, useEffect} from "react";

const CustomerProfile = (props) => {
    // return <p>Customer {props.booking.id} Profile</p>
    const [customerProfileData, setCustomerProfileData] = useState("");

    useEffect(() => {
        console.log("Fetching information ...");
        fetch(`https://temporary-cyf-react.onrender.com/delayed/${props.id}`)
          .then((res) => res.json())
          .then((data) => setCustomerProfileData(data))
          .catch((er) => {
            console.log(er);
          });
    }, [props.id]);

    return (
        <div className="customer-profile-container">
            <h3 className="font-weight-bold">Customer Profile</h3>
            <p className="font-weight-bold">
                Customer ID:{" "}
                <span className="font-weight-normal">{customerProfileData.id}</span>
            </p>
            <p className="font-weight-bold">
                Customer Name:{" "}
                <span className="font-weight-normal">
                    {customerProfileData.title} {customerProfileData.firstName}{" "}
                    {customerProfileData.surname}
                </span>
            </p>
            <p className="font-weight-bold">
                Customer Email:{" "}
                <span className="font-weight-normal">
                    {customerProfileData.email}
                </span>
            </p>
            <p className="font-weight-bold">
                Customer Phone Number:{" "}
                <span className="font-weight-normal">
                    {customerProfileData.phoneNumber}
                </span>
            </p>
            <p className="font-weight-bold">
                VIP :{" "}
                <span className="font-weight-normal">
                    {customerProfileData.vip ? "Yes" : "No"}
                </span>
            </p>
        </div>
    );
};
export default CustomerProfile;