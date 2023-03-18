import { useEffect, useState } from "react";

function CustomerProfile({ id, handleClose }) {
  const [profile, setProfile] = useState("");

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => {
        setProfile(data);
      });
  }, [id]);

  return (
    <table className="App-content table table-striped profile-width">
      <thead>
        <tr>
          <th scope="col">Customer Profile</th>
          <th scope="col" className="pointer left red">
            <button onClick={handleClose}>X</button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ID: </td>
          <td>{profile.id}</td>
        </tr>
        <tr>
          <td>Email: </td>
          <td>{profile.email}</td>
        </tr>
        <tr>
          <td>VIP: </td>
          <td> {profile.email ? "YES" : "NO"}</td>
        </tr>
        <tr>
          <td>Phone Number: </td>
          <td>{profile.phoneNumber}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default CustomerProfile;
