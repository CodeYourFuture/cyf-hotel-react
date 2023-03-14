import { useEffect, useState } from "react";

const CustomerProfile = ({ id } = props) => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${id}`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, [id]);
  console.log(data);

  return (
    id !== "" && (
      <div className="restaurant">
        <p>Customer {id} Profile</p>
        <p>{data.email}</p>
        {data.vip && <p>VIP</p>}
        <p>{data.phoneNumber}</p>
      </div>
    )
  );
};

export default CustomerProfile;
