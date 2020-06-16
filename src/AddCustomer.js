import React, { useState, useEffect } from "react";
import moment from "moment";

const AddCustomer = ({ showAddCustomerForm_F, addCustomer_F, newId }) => {
  const [dateIn, setDateIn] = useState("");
  const [dateOut, setDateOut] = useState("");
  const [night, setNight] = useState("-");
  const [VIP, setVip] = useState(false);
  // Input Validation
  const [titleValidate, setTitleValidate] = useState("Null");
  const [firstNameValidate, setFirstNameValidate] = useState("Null");
  const [surNameValidate, setSurNameValidate] = useState("Null");
  const [emailValidate, setEmailValidate] = useState("Input_Email_CSS");
  const [phoneNumberValidate, setPhoneNumberValidate] = useState("Null");
  const [roomNumberValidate, setRoomNumberValidate] = useState("Null");
  const [checkInValidate, setCheckInValidate] = useState("Null");
  const [checkOutValidate, setCheckOutValidate] = useState("Null");

  useEffect(() => {
    if (dateIn !== "" && dateOut !== "") {
      if (moment(dateOut).diff(moment(dateIn), "days") > 0) {
        setNight(moment(dateOut).diff(moment(dateIn), "days"));
        document.getElementById("P_Night_JSX").className = "P_Night_CSS";
      } else {
        setNight("!");
      }
    } else {
      setNight("-");
    }
  }, [dateIn, dateOut]);

  const emailValidation = e => {
    if (e === "") {
      setEmailValidate("Input_Email_CSS Error");
    } else if (new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(e)) {
      setEmailValidate("Input_Email_CSS");
    } else {
      setEmailValidate("Input_Email_CSS Error");
    }
  };

  const addCustomer = () => {
    let i = 0;
    if (document.getElementById("Input_Title_JSX").value === "") {
      i++;
      setTitleValidate("");
    }
    if (document.getElementById("Input_RoomId_JSX").value === "") {
      i++;
      setRoomNumberValidate("");
    }
    if (document.getElementById("Input_FirstName_JSX").value === "") {
      i++;
      setFirstNameValidate("");
    }
    if (document.getElementById("Input_CheckInDate_JSX").value === "") {
      i++;
      setCheckInValidate("");
    }
    if (document.getElementById("Input_Surname_JSX").value === "") {
      i++;
      setSurNameValidate("");
    }
    if (document.getElementById("Input_CheckOutDate_JSX").value === "") {
      i++;
      setCheckOutValidate("");
    }
    if (document.getElementById("Input_Email_JSX").value === "") {
      i++;
      setEmailValidate("Input_Email_CSS Error");
    }
    emailValidation(document.getElementById("Input_Email_JSX").value);
    if (
      document.getElementById("Input_Email_JSX").value !== "" &&
      emailValidate === "Input_Email_CSS Error"
    ) {
      i++;
    }
    if (document.getElementById("Input_PhoneNumber_JSX").value === "") {
      i++;
      setPhoneNumberValidate("");
    }
    if (night === "-" || night === "!") {
      i++;
      document.getElementById("P_Night_JSX").className = "P_Night_CSS Error";
    }
    if (i === 0) {
      addCustomer_F({
        id: newId,
        title: document.getElementById("Input_Title_JSX").value,
        firstName: document.getElementById("Input_FirstName_JSX").value,
        surname: document.getElementById("Input_Surname_JSX").value,
        email: document.getElementById("Input_Email_JSX").value,
        phoneNumber: document.getElementById("Input_PhoneNumber_JSX").value,
        roomId: document.getElementById("Input_RoomId_JSX").value,
        vip: VIP,
        checkInDate: document.getElementById("Input_CheckInDate_JSX").value,
        checkOutDate: document.getElementById("Input_CheckOutDate_JSX").value
      });
      showAddCustomerForm_F(false);
    }
  };
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
                <p
                  className={
                    VIP
                      ? "P_VIPOptionButton_CSS P_VIPOptionButtonSelected_CSS"
                      : "P_VIPOptionButton_CSS P_VIPOptionButtonUnselected_CSS"
                  }
                  onClick={() => setVip(!VIP)}
                >
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
                  id="Input_Title_JSX"
                  className={
                    titleValidate === ""
                      ? "Input_Title_CSS Error"
                      : "Input_Title_CSS"
                  }
                  onChange={e => setTitleValidate(e.target.value)}
                  required
                />
              </td>
              <td>
                <input
                  type="number"
                  id="Input_RoomId_JSX"
                  className={
                    roomNumberValidate === ""
                      ? "Input_RoomId_CSS Error"
                      : "Input_RoomId_CSS"
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
                  id="Input_FirstName_JSX"
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
                  id="Input_CheckInDate_JSX"
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
                  id="Input_Surname_JSX"
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
                  id="Input_CheckOutDate_JSX"
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
                  id="Input_Email_JSX"
                  placeholder="Email: example@email.com"
                  className={emailValidate}
                  onChange={e => emailValidation(e.target.value)}
                  required
                />
              </td>
              <td>
                <p
                  id="P_Night_JSX"
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
                  id="Input_PhoneNumber_JSX"
                  placeholder="01234567890"
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
                <p
                  className="P_Button_CSS"
                  onClick={() => {
                    addCustomer();
                  }}
                >
                  Add
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddCustomer;
