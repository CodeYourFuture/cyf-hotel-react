import react from "react";

export default function CustomerProfile(props) {
  return (
    <div className="customerProfile">
      <p>
        <b>Customer ID:</b> {props.profile.id}
      </p>
      <p>
        <b>Email: </b>
        <p>{props.profile.email}</p>
      </p>
      <p>
        <b>VIP: </b>
        {props.profile.vip ? "yes" : "no"}
      </p>
      <p>
        <b>Phone Number: </b>
        <p>{props.profile.phoneNumber}</p>
      </p>
    </div>
  );
}

// export default function CustomerProfile(props) {
//   return <span>Customer {props.id} Profile</span>;
// }
