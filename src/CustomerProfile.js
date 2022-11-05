import React, { useEffect } from "react";
// import React from "react";
import SearchResults from "./SearchResults";

const CustomerProfile = ({ ids }) => {
  const [email, setEmail] = useState([]);

  useEffect(() => {
    console.log("Fetching data from NASA");

    fetch(`https://cyf-react.glitch.me/customers/${ids}`)
      .then(res => res.json())
      .then(data => {
        setEmail(data);
      });
  }, []);

  return (
    <div>
      <ul>
        <li>Customer {ids} Profile</li>
        <li>{email}</li>
      </ul>
    </div>
  );
};

export default CustomerProfile;
