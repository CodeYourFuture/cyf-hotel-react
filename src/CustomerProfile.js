import { data } from "autoprefixer";
import { useEffect, useState } from "react";

const CustomerProfile = ({ id }) => {
  const [personInfo, setPersonInfo] = useState([]);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => {
        setPersonInfo(data);
      });
  }, [id]);
  return (
    <div className="customerProfile">
      <p>Customer {id} profile</p>
      {
        <ul>
          <li>Name: {personInfo.firstName}</li>
          <li>Email: {personInfo.email}</li>
          <li>Phone No: {personInfo.phoneNumber}</li>
          <li>Vip Guest: {personInfo.vip ? "Yes" : "No"}</li>
        </ul>
      }
    </div>
  );
};

export default CustomerProfile;
