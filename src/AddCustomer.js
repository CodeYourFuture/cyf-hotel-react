import React from "react";

const AddCustomer = ({ showAddCustomerForm_F }) => {
  return (
    <div className="Div_ShowProfile_CSS">
      <div
        className="Div_ShowProfileChild_CSS"
        onClick={() => showAddCustomerForm_F()}
      >
        <div className="Div_UserAvatar_CSS">
          <i className="I_User_CSS fas fa-user" />
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;
