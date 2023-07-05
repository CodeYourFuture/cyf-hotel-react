import { useEffect, useState } from "react";

const CustomerProfile = (props) => {
  const [customerData, setCustomerData] = useState("");
  useEffect(() => {
    if (props.id) {
      fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
        .then((response) => response.json())
        .then((data) => setCustomerData(data));
    }
  }, [props.id]);
  return (
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Customer ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">VIP</th>
          <th scope="col">Phone number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{props.id}</th>
          <td>{customerData.title}</td>
          <td>{customerData.firstName}</td>
          <td>{customerData.surname}</td>
          <td>{customerData.email}</td>
          <td>{customerData.vip ? "Yes" : "No"}</td>
          <td>{customerData.phoneNumber}</td>
        </tr>
      </tbody>
    </table>
  );
};
export default CustomerProfile;
