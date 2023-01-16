import React, { useState, useEffect } from "react";

const CustomerProfile = (props) => {
  console.log(props);
  const [profileId, setProfileId] = useState("");

  useEffect(() => {
    setProfileId(props.id);
  }, [props.id]);

  console.log(props.id);

  if (profileId > 0) {
    return <div>Customer Profile: {profileId}</div>;
  } else {
    return null;
  }
};

export default CustomerProfile;
