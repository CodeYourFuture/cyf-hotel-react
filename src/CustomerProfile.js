import React, { useState, useEffect } from "react";

const CustomerProfile = ({ id }) => {
  const [customerProfile, setCustomerProfile] = useState({});
  const [customerId, setCustomerId] = useState(null);
  const [show, setShow] = useState(true);

  const handleProfile = () => {
    setCustomerId(id);
    show ? setShow(false) : setShow(true);
  };

  useEffect(() => {
    if (customerId) {
      fetch(`https://hotel-cyf-server.onrender.com/bookings/${customerId}`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setCustomerProfile(data);
        })
        .catch(err => console.log(err));
    }
  }, [customerId]);

  return (
    <>
      <button onClick={handleProfile} className="btn btn-primary">
        {show ? "Show Profile" : "Hide Profile"}
      </button>
      <ul className={show ? "d-none" : "d-block"}>
        <li>ID: {customerProfile.id}</li>
        <li>Title: {customerProfile.title}</li>
        <li>First Name: {customerProfile.firstName}</li>
        <li>Surname: {customerProfile.surname}</li>
        <li>Email: {customerProfile.email}</li>
        <li>Phone Number: {customerProfile.phoneNumber}</li>
        {customerProfile.vip && <li style={{ color: "purple" }}> VIP </li>}
      </ul>
    </>
  );
};

export default CustomerProfile;
