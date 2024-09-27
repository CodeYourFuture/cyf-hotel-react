
import React, { useEffect, useState } from "react";
const CustomerProfile = props => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setProfile(data);
        console.log(props);
      });
  }, []);

  return (
    <div className="CustomerProfile">
      <div className="page-header">
        <h4 className="text-left">CustomerProfile</h4>
      </div>
    </div>
  );
};

export default CustomerProfile;