import React, { useState, useEffect } from "react";
import moment from "moment";

const ShowProfile = ({ profileState_F, profileData }) => {
  const [phoneAndVip, setPhoneAndVip] = useState([]);
  useEffect(() => {
    if (profileData.phoneNumber === undefined) {
      fetch(`https://cyf-react.illicitonion.com/customers/${profileData.id}`)
        .then(results => results.json())
        .then(data => {
          setPhoneAndVip({ phoneNumber: data.phoneNumber, vip: data.vip });
        });
    }
  }, [profileData.id, profileData.phoneNumber]);
  return (
    <div className="Div_ShowProfile_CSS">
      <div className="Div_ShowProfileChild_CSS">
        <div className="Div_UserAvatar_CSS">
          <i className="I_User_CSS fas fa-user" />
        </div>
        <table className="Div_UserDetail_CSS">
          <tbody>
            <tr>
              <td>
                {profileData.vip ? (
                  <p className="P_VIP_CSS">
                    <strong>VIP</strong>
                  </p>
                ) : null || phoneAndVip.vip ? (
                  <p className="P_VIP_CSS">
                    <strong>VIP</strong>
                  </p>
                ) : null}
              </td>
            </tr>
            <tr>
              <td className="Div_FirstPard_CSS">
                <strong>{profileData.title},&nbsp;</strong>
                {profileData.firstName}&nbsp;
                {profileData.surname}
              </td>
              <td>
                <strong>Check in date: </strong>
                {profileData.checkInDate}
              </td>
            </tr>
            <tr>
              <td>
                <strong>Email: </strong>
                {profileData.email}
              </td>
              <td>
                <strong>Check out date: </strong>
                {profileData.checkOutDate}
              </td>
            </tr>
            <tr>
              <td>
                <strong>Phone: </strong>
                {profileData.phoneNumber || phoneAndVip.phoneNumber}
              </td>
              <td>
                <strong>Night: </strong>
                {moment(profileData.checkOutDate).diff(
                  moment(profileData.checkInDate),
                  "days"
                )}
              </td>
            </tr>
            <tr>
              <td>
                <strong>Room Id: </strong>
                {profileData.roomId}
              </td>
            </tr>
            <tr>
              <td />
              <td>
                <p
                  className="P_Close_CSS"
                  onClick={() => {
                    profileState_F("");
                  }}
                >
                  Back
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowProfile;
