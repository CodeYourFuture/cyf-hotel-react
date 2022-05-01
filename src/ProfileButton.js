import React from "react";

const ProfileButton = ({ id, selectProfile }) => {
  return (
    <button className="btn btn-secondary" value={id} onClick={selectProfile}>
      Profile
    </button>
  );
};

export default ProfileButton;
