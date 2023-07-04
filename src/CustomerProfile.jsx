export default function CustomerProfile({ id, title, firstName, surname, email, vip, phoneNumber }) {
  
  return (
    <div>
      <h2>Customer {id} Profile</h2>
      <ul>
        <li>Title: {title}</li>
        <li>First Name: {firstName}</li>
        <li>Surname: {surname}</li>
        <li>Email: {email}</li>
        <li>Vip: {vip ? "Yes" : "No"}</li>
        <li>Phone Number: {phoneNumber}</li>
       </ul>
    </div>
  );
  
    
};
