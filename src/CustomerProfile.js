import React from "react";

const CustomerProfile = props => {
  const [customerProfileData, setCustomerProfileData] = React.useState("");

  React.useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(data => setCustomerProfileData(data));
  }, [props.id]);

  return (
    <div className="customer-profile-container">
      <h3 className="customer-profile-title">Customer Profile</h3>
      <span className="customer-profile-info-id">
        Customer ID: {customerProfileData.id}
      </span>
      <span className="customer-profile-info-name">
        Customer Name: {customerProfileData.title}{" "}
        {customerProfileData.firstName} {customerProfileData.surname}
      </span>
      <span className="customer-profile-info-email">
        Customer Email: {customerProfileData.email}
      </span>
      <span className="customer-profile-info-phone">
        Customer Phone Number: {customerProfileData.phoneNumber}
      </span>
      <span className="customer-profile-info-vip">
        VIP : {customerProfileData.vip ? "Yes" : "No"}
      </span>
    </div>
  );
};

export default CustomerProfile;
