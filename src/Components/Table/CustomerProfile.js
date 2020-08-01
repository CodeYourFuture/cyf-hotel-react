import React from "react";

const CustomerProfile = ({ id, data, setIsShow }) => {
  return (
    <div className={id ? "show" : "notShow"}>
      <h3>Customer Profile</h3>
      <div className="customer-details">
        <div>
          {data.firstName} {data.surname}
        </div>

        <div>Email: {data.email}</div>

        <div>Phone number:{data.phoneNumber}</div>
        <div className={data.vip ? "vip" : ""}>
          <p>{data.vip ? "VIP" : ""}</p>
        </div>
        <button
          className="btn btn-primary"
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
