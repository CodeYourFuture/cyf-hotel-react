import React from "react";

const CustomerProfile = ({ profileID, guestID }) => {
  return profileID !== null ? (
    <section className="customer-profile">
      <h3 className={guestID ? "loading" : "loaded"}>
        Loading Customer Profile
      </h3>
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
  ) : (
    <h3>Loading</h3>
  );
};

export default CustomerProfile;
