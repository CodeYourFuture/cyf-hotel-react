import React from "react";

const CustomerProfile = ({ id, data, setIsShow }) => {
  return (
    <div className={id ? "show" : "notShow"}>
      <h3>Customer {id} Profile</h3>
      <div className="customer-details">
        <div>
          {data.title} {data.firstName} {data.surname}
        </div>

        <div>Email: {data.email}</div>
        <div className="vip">
          <p>{data.vip ? "VIP" : ""}</p>
        </div>
        <div>Phone number:{data.phoneNumber}</div>
        <button
          onClick={() => {
            setIsShow(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CustomerProfile;
