import React, { useRef, useState, useEffect } from "react";

const CustomerProfile = props => {
  const [details, setDetails] = useState({});
  const [controller, setController] = useState(false);
  const [show, setShow] = useState(true);

  const profileSearch = e => {
    e.preventDefault();
    console.log(e.target.nextSibling);
    if (details !== props.id) {
      setDetails({ id: props.id });
      if (show) {
        setShow(false);
        e.target.nextSibling.className = "d-block";
      } else {
        setShow(true);
        e.target.nextSibling.className = "d-none";
      }
    }
  };

  useEffect(() => {
    if (details.id && !controller) {
      fetch(`https://biruk-hotel-server.herokuapp.com/bookings/${details.id}`)
        .then(res => res.json())
        .then(data => {
          if (details.id === props.id) {
            setDetails(data);
            setController(true);
          }
        })
        .catch(err => console.log(err));
    }
  }, [details, props.id, controller]);

  return (
    <>
      <button onClick={profileSearch} className="btn btn-primary">
        {show ? "Show Profile" : "Hide Profile"}
      </button>
      <ul className={details.id ? "d-block" : "d-none"}>
        <li>id: {details.id}</li>
        <li>title: {details.title}</li>
        <li>first name: {details.firstName}</li>
        <li>surname: {details.surname}</li>
        <li>email: {details.email}</li>
        <li>phone number: {details.phoneNumber}</li>
        <li>vip: {`${details.vip}`}</li>
      </ul>
    </>
  );
};

export default CustomerProfile;
