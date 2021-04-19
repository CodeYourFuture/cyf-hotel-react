import React, { useState, useEffect } from "react";
import RowColorChanger from "./RowColorChanger";

const CustomerProfile = props => {
  const [customersData, setcustomersData] = useState([]);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.costomerId}`)
      .then(response => response.json())
      .then(data => setcustomersData(data));
  }, [props.costomerId]);

  return (
    props.costomerId && (
      <div>
        <table class="table table-borderless table-dark">
          <thead />
          <tbody>
            <tr>
              <td colspan="2">id</td>
              <td colspan="2">title</td>
              <td colspan="2">First Name</td>
              <td colspan="2">surname</td>
              <td colspan="2">email</td>
              <td colspan="2">vip</td>
              <td colspan="2">Phone Number</td>
            </tr>

            <tr className="text-warning">
              <td colspan="2">{customersData.id}</td>
              <td colspan="2">{customersData.title}</td>
              <td colspan="2">{customersData.firstName}</td>
              <td colspan="2">{customersData.surname}</td>
              <td colspan="2">{customersData.email}</td>
              <td colspan="2">{customersData.vip}</td>
              <td colspan="2">{customersData.phoneNumber}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  );
};

export default CustomerProfile;
