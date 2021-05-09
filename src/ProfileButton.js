import React, { useState } from "react";

const ProfileButton = props => {
  const [customerID, setCustomerID] = useState("");

  const handleProfileButtonClick = props => {
    setCustomerID(props);
  };

  return (
    <button
      props={customerID}
      onClick={() => handleProfileButtonClick(props)}
      className="profileButton btn btn-primary"
      profileButtonClick={handleProfileButtonClick}
    >
      Show Profile
    </button>
  );
};

export default ProfileButton;
