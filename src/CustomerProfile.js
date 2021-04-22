import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [details, setDetails] = useState({});
  const profileSearch = () => {
    if (details !== props.id) {
      setDetails({ id: props.id });
    }
  };

  useEffect(() => {
    if (details.id) {
      fetch(`https://cyf-react.glitch.me/customers/${details.id}`)
        .then(res => res.json())
        .then(data => {
          if (details.id === props.id) {
            setDetails(data);
          }
        })
        .catch(err => console.log(err));
    }
  }, [details, props.id]);

  return (
    <>
      <button onClick={profileSearch} className="btn btn-primary">
        Show Profile
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
