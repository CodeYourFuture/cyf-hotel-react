import React from "react";

const CustomerProfile = props => {
  // const [profile, setProfile] = useState({
  //     id:null,
  //     email: null,
  //     vip: null,
  //     phoneNumber: null
  // });
  return (
    <div className="customer-profile">
      <h2>Customer {props.customerId} Profile</h2>
    </div>
  );
};

export default CustomerProfile;
