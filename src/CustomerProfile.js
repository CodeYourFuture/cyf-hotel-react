import React, { useEffect, useState } from "react";

const CustomerProfile = ({ customerId }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://hotel-server.herokuapp.com/bookings/${customerId}`)
      .then(res => {
        if (res) {
          return res.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then(data => setData(data));
  }, [customerId]);
  console.log(data);

  if ((data.length = 0 || customerId === "")) {
    return null;
  } else {
    return (
      <div className="bg-danger text-white mx-auto">
        <p className="ml-3 mt-2">Customer Id : {customerId}</p>
        <p className="ml-3">Customer Email :{data.email} </p>
        <p className="ml-3">
          {data.vip
            ? "This Customer is VIP customer"
            : "This Customer is NOT VIP customer"}{" "}
        </p>
        <p className="ml-3">Phone Number : {data.phoneNumber}</p>
      </div>
    );
  }
};

export default CustomerProfile;
