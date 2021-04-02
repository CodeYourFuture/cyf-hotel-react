import React from "react";

const CustomerProfile = props => {
  console.log(props.userProfile);
  return (
    <tbody>
      <tr>
        <td>
          <strong>
            {`${props.userProfile.firstName} ${
              props.userProfile.surname
            }'s Profile`}
          </strong>
        </td>
      </tr>
      <tr>
        <td>Customer's Id: {props.userProfile.id}</td>
      </tr>
      <tr>
        <td>Customer's Email: {props.userProfile.email}</td>
      </tr>
      <tr>
        <td>Customer's Phone Number: {props.userProfile.phoneNumber}</td>
      </tr>
      <tr>
        <td>VIP: {props.userProfile.vip ? "Yes" : "No"}</td>
      </tr>
    </tbody>
  );
};

export default CustomerProfile;
