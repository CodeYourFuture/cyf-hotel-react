const CustomerProfile = ({ customerData }) => {
  return (
    <div>
      <h4>Customer {customerData.id} profile</h4>
      <ul>
        <li>Title: {customerData.title}</li>
        <li>First Name: {customerData.firstName}</li>
        <li>Surname: {customerData.surname}</li>
        <li>Email: {customerData.email}</li>
        <li>VIP: {customerData.vip ? "Yes" : "No"}</li>
        <li>Phone Number: {customerData.phoneNumber}</li>
      </ul>
    </div>
  );
};

export default CustomerProfile;
