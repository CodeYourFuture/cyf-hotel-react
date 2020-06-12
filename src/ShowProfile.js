import React from "react";

const ShowProfile = ({ closeProfile, profileState_F, profileData }) => {
  return (
    <div className="Div_ShowProfile_CSS">
      <div className="Div_ShowProfileChild_CSS">
        <div className="Div_UserAvatar_CSS">
          <i className="I_User_CSS fas fa-user" />
        </div>
        <div className="Div_UserDetail_CSS">
          <div className="D_VIP_CSS">
            {profileData.vip ? (
              <p className="P_VIP_CSS">
                <strong>VIP</strong>
              </p>
            ) : null}
          </div>
          <div className="Div_FirstPard_CSS">
            <p className="P_Title_CSS">{profileData.title},</p>
            <p className="P_FirstName_CSS">{profileData.firstName}</p>
            <p className="P_SurName_CSS">{profileData.surname}</p>
          </div>
          <p className="P_Email_CSS">
            <strong>Email: </strong>
            {profileData.email}
          </p>
          <p className="P_Phone_CSS">
            <strong>Phone: </strong>
            {profileData.phoneNumber}
          </p>
          <p
            className="P_Close_CSS"
            onClick={() => {
              closeProfile("");
              profileState_F("");
            }}
          >
            {" "}
            Close{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowProfile;
