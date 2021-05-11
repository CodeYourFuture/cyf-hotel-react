import React from "react";

const CustomerProfile = ({ profileID }) => {
  return (
    profileID !== null && (
      <section className="customer-profile">
        <p>
          Guest First Name:<span>{profileID.firstName}</span>
        </p>
        <p>
          Guest First Name:<span>{profileID.surname}</span>
        </p>
        <p>
          Guest Status:<span>{profileID.vip ? "VIP" : "Normal"}</span>
        </p>
        <p>
          Guest Phone Number:<span>{profileID.phoneNumber}</span>
        </p>
        <p>
          Guest Email:<span>{profileID.email}</span>
        </p>
      </section>
    )
  );
};

export default CustomerProfile;
