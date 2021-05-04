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
      .then(data => {
        setData(data);
        console.log("ProfileData", data);
      });
  }, [customerId]);

  if (customerId === "") {
    return null;
  } else {
    return (
      <div className="bg-secondary text-white mx-auto ">
        <p className="ml-3 font-weight-bold pt-3">Customer Information</p>
        <p className="ml-3 font-weight-bold">
          Full Name:{data.firstName} {data.surName}
        </p>
        <p className="ml-3 font-weight-bold mt-2">Room:{data.roomId}</p>
        <p className="ml-3 font-weight-bold">Contact:{data.email} </p>
        <p className="ml-3 font-weight-bold">Day of leaving: {data.checkOut}</p>
        <p className="ml-3 font-weight-bold" />
      </div>
    );
  }
};

export default CustomerProfile;
