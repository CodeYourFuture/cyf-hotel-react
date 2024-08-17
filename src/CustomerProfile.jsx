const CustomerProfile = ({ customerData }) => {
  // console.log(customerData);

  return (
    <div>
      <h2>Customer {customerData.id} profile</h2>
      <ul>
        <li>Title: {customerData.title}</li>
        <li>First Name: {customerData.firstName}</li>
        <li>Surname: {customerData.surname}</li>
        <li>Email: {customerData.email}</li>
        <li>VIP: {customerData.vip ? "Yes" : "No"}</li>
        <li>Phone: {customerData.phoneNumber}</li>
      </ul>
    </div>
  );
};

export default CustomerProfile;
