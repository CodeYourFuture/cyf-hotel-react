import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";

const CustomerProfile = ({ id }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  console.log(id);
  const [user, setUser] = useState([]);
  console.log(user);
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUser(data);
      });
  }, [id]);
  return (
    <div>
      {/* <Modal show={show} onHide={handleClose}> */}
      {/* <Modal.Body> */}
      Custromer {id} profile
      <ul>
        <li> Customer email : {user.email}</li>
        <li> Customer phone number : {user.phoneNumber}</li>
        <li> Customer VIP : {user.vip ? "Yes" : "No"}</li>
      </ul>
      {/* </Modal.Body> */}
      {/* </Modal> */}
    </div>
  );
};
export default CustomerProfile;
