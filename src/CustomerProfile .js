import React from "react";

export default function CustomerProfile({ id, data }) {
  return (
    <div className="card my-4 mx-auto">
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-center bg-danger text-white">
          Customer {id} profile
        </li>
        <li className="list-group-item">ID: {data.id}</li>
        <li className="list-group-item">Email: {data.email}</li>
        <li className="list-group-item">VIP: {data.vip ? "Yes" : "No"}</li>
        <li className="list-group-item">Phone: {data.phoneNumber}</li>
      </ul>
    </div>
  );
}
