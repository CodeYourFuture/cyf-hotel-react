import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [details, setDetails] = useState({});
  const [controller, setController] = useState(false);
  const [show, setShow] = useState(true);

  const handleProfile = e => {
    e.preventDefault();
    if (details !== props.id) {
      setDetails({ id: props.id });
      show ? setShow(false) : setShow(true);
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
      <button onClick={handleProfile} className="btn btn-primary">
        {show ? "Show Profile" : "Hide Profile"}
      </button>
      <ul className={show ? "d-none" : "d-block"}>
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
