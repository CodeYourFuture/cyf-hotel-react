import React, { useState, useEffect } from "react";
import moment from "moment";
import CustomerProfile from "./customerProfile";

const TableRow = ({ e }) => {
  // above {e}, instead of writing props, we are just defining the variable name directlty using array destructuring

  // use States
  const [id, setId] = useState(null); // only way i can show no profile info is this set to null , But i dont get datas back from fetching if don't set to array []
  const [email, setEmail] = useState(null);
  const [vip, setVip] = useState("");
  const [phone, setPhone] = useState(null);

  // use effect
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => {
        data.vip ? setVip("true") : setVip("false");
        data.phoneNumber
          ? setPhone(data.phoneNumber)
          : setPhone("No Phone number found.");
        console.log(data);
        return data;
      });
  }, [id]);

  let handleBtnClick = () => {
    setId(e.id);
    setEmail(e.email);
    setVip(vip);
  };

  const [bgColor, changeColor] = useState("bg-info");
  let switchColors = () => {
    if (bgColor === "bg-info") {
      changeColor("bg-warning");
    } else {
      changeColor("bg-info");
    }
  };

  let inDate = moment(e.checkInDate);
  let outDate = moment(e.checkOutDate);
  const difference = outDate.diff(inDate, "days"); // takes 2 arguments, last one is for if we want output as days or hour or months
  return (
    <tr className={bgColor} id="row-text" key={e.id} onClick={switchColors}>
      <td>{e.id}</td>
      <td>{e.title}</td>
      <td>{e.firstName}</td>
      <td>{e.surname}</td>
      <td>{e.email}</td>
      <td>{e.roomId}</td>
      <td>{e.checkInDate}</td>
      <td>{e.checkOutDate}</td>
      <td>{difference}</td>
      <button className="btn btn-dark text mr-1" onClick={handleBtnClick}>
        Show profile
      </button>
      <tr>
        {id ? (
          <CustomerProfile
            id={id}
            email={email}
            vip={vip}
            phone={phone}
            handleBtnClick={handleBtnClick}
          />
        ) : null}
      </tr>
    </tr>
  );
};

export default TableRow;
