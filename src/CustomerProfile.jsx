import { useEffect, useState } from "react";

function CustomerProfile({ id, handleClose }) {
  const [profile, setProfile] = useState("");

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProfile(data);
      });
  }, [id]);

  return (
    <table className="App-content">
      <tbody>
        <th>Customer Profile</th>
        <th onClick={handleClose}>X</th>
        <tr>ID: {profile.id}</tr>
        <tr>Email: {profile.email}</tr>
        <tr>VIP: {profile.email ? "YES" : "NO"}</tr>
        <tr>Phone Number: {profile.phoneNumber}</tr>
      </tbody>
    </table>
  );
}

export default CustomerProfile;
