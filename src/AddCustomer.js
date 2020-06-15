import React from "react";
import moment from "moment";

const AddCustomer = ({ showAddCustomerForm_F, addCustomer_F }) => {
  return (
    <div className="Div_AddProfileFullSize_CSS">
      <div className="Div_AddProfile_CSS">
        <div className="Div_UserAvatar_CSS">
          <i className="I_User_CSS fas fa-user" />
        </div>
        <table className="Div_UserDetail_CSS">
          <tbody>
            <tr>
              <td>
                <p className="P_VIP_CSS">
                  <strong>VIP</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="TD_Label_CSS">Title: </p>
              </td>
              <td>
                <p className="TD_Label_CSS">Room Id: </p>
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" className="Input_Title_CSS" />
              </td>
              <td>
                <input type="number" className="Input_RoomId_CSS" />
              </td>
            </tr>
            <tr>
              <td>
                <p className="TD_Label_CSS">First Name: </p>
              </td>
              <td>
                <p className="TD_Label_CSS">Check In Date: </p>
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" className="Input_FirstName_CSS" />
              </td>
              <td>
                <input type="date" className="Input_CheckDate_CSS" />
              </td>
            </tr>
            <tr>
              <td>
                <p className="TD_Label_CSS">SurName: </p>
              </td>
              <td>
                <p className="TD_Label_CSS">Check Out Date: </p>
              </td>
            </tr>
            <tr>
              <td>
                <input type="text" className="Input_Surname_CSS" />
              </td>
              <td>
                <input type="date" className="Input_CheckDate_CSS" />
              </td>
            </tr>
            <tr>
              <td>
                <p className="TD_Label_CSS">Email: </p>
              </td>
              <td>
                <p className="TD_Label_CSS">Night: </p>
              </td>
            </tr>
            <tr>
              <td>
                <input type="email" className="Input_Email_CSS" />
              </td>
              <td>
                <p className="P_Night_CSS" />
              </td>
            </tr>
            <tr>
              <td>
                <p className="TD_Label_CSS">Phone Number: </p>
              </td>
            </tr>
            <tr>
              <td>
                <input type="number" className="Input_PhoneNumber_CSS" />
              </td>
            </tr>
            <tr>
              <td />
              <td className="TD_Button_CSS">
                <p
                  className="P_Button_CSS"
                  onClick={() => showAddCustomerForm_F(false)}
                >
                  cancel
                </p>
                <p className="P_Button_CSS">Add</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddCustomer;
