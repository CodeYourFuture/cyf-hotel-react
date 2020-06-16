import React, { useState, useEffect } from "react";
import moment from "moment";

const AddCustomer = ({ showAddCustomerForm_F, addCustomer_F }) => {
  const [dateIn, setDateIn] = useState("");
  const [dateOut, setDateOut] = useState("");
  const [night, setNight] = useState("-");
  // Input Validation
  const [titleValidate, setTitleValidate] = useState("Null");
  const [firstNameValidate, setFirstNameValidate] = useState("Null");
  const [surNameValidate, setSurNameValidate] = useState("Null");
  const [emailValidate, setEmailValidate] = useState("Null");
  const [phoneNumberValidate, setPhoneNumberValidate] = useState("Null");
  const [roomNumberValidate, setRoomNumberValidate] = useState("Null");
  const [checkInValidate, setCheckInValidate] = useState("Null");
  const [checkOutValidate, setCheckOutValidate] = useState("Null");

  useEffect(() => {
    if (dateIn !== "" && dateOut !== "") {
      if (moment(dateOut).diff(moment(dateIn), "days") > 0) {
        setNight(moment(dateOut).diff(moment(dateIn), "days"));
      } else {
        setNight("!");
      }
    } else {
      setNight("-");
    }
  }, [dateIn, dateOut]);

  const addCustomer = () => {};

  const nightCalculator = () => {};
  return (
    <div className="Div_AddProfileFullSize_CSS">
      <form className="Div_AddProfile_CSS">
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
                <input
                  type="text"
                  className={
                    titleValidate === ""
                      ? "Input_RoomId_CSS Error"
                      : "Input_RoomId_CSS"
                  }
                  onChange={e => setTitleValidate(e.target.value)}
                  required
                />
              </td>
              <td>
                <input
                  type="number"
                  className={
                    roomNumberValidate === ""
                      ? "Input_CheckDate_CSS Error"
                      : "Input_CheckDate_CSS"
                  }
                  onChange={e => {
                    setRoomNumberValidate(e.target.value);
                  }}
                  required
                />
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
                <input
                  type="text"
                  className={
                    firstNameValidate === ""
                      ? "Input_FirstName_CSS Error"
                      : "Input_FirstName_CSS"
                  }
                  onChange={e => setFirstNameValidate(e.target.value)}
                  required
                />
              </td>
              <td>
                <input
                  type="date"
                  className={
                    checkInValidate === ""
                      ? "Input_CheckDate_CSS Error"
                      : "Input_CheckDate_CSS"
                  }
                  onChange={e => {
                    setDateIn(e.target.value);
                    setCheckInValidate(e.target.value);
                  }}
                  required
                />
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
                <input
                  type="text"
                  className={
                    surNameValidate === ""
                      ? "Input_Surname_CSS Error"
                      : "Input_Surname_CSS"
                  }
                  onChange={e => setSurNameValidate(e.target.value)}
                  required
                />
              </td>
              <td>
                <input
                  type="date"
                  className={
                    checkOutValidate === ""
                      ? "Input_CheckDate_CSS Error"
                      : "Input_CheckDate_CSS"
                  }
                  onChange={e => {
                    setDateOut(e.target.value);
                    setCheckOutValidate(e.target.value);
                  }}
                  required
                />
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
                <input
                  type="email"
                  className={
                    emailValidate === ""
                      ? "Input_Email_CSS Error"
                      : "Input_Email_CSS"
                  }
                  onChange={e => setEmailValidate(e.target.value)}
                  required
                />
              </td>
              <td>
                <p
                  className={
                    night === "!" ? "P_Night_CSS Error" : "P_Night_CSS"
                  }
                >
                  {night}
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="TD_Label_CSS">Phone Number: </p>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="number"
                  className={
                    phoneNumberValidate === ""
                      ? "Input_PhoneNumber_CSS Error"
                      : "Input_PhoneNumber_CSS"
                  }
                  onChange={e => setPhoneNumberValidate(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td />
              <td className="TD_Button_CSS">
                <p
                  className="P_Button_CSS"
                  onClick={() => showAddCustomerForm_F(false)}
                >
                  Cancel
                </p>
                <button
                  type="submit"
                  className="P_Button_CSS"
                  onClick={() => {
                    addCustomer();
                  }}
                >
                  Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default AddCustomer;
