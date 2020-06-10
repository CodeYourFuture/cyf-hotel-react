import React from "react";

const CustomerProfile = ({ id, data, setProfile }) => {
  return (
    <div className={id ? "show" : "notShow"} id="card">
      <h4>Customer {id} Profile : </h4>
      <div className={data.vip ? "vip" : ""}>
        <p>{data.vip ? "VIP" : ""}</p>
      </div>
      <h3>
        {data.title} {data.firstName} {data.surname}
      </h3>
      <p>
        Email : <a href={data.email}> {data.email}</a>{" "}
      </p>
      <p>Phone number : {data.phoneNumber}</p>
      <button
        className="btn btn-primary"
        onClick={() => {
          setProfile(false);
        }}
      >
        {" "}
        Close{" "}
      </button>
    </div>
  );
};

export default CustomerProfile;
