import React, { useState, useEffect } from "react";
//fetch data by only id from api
const CustomerProfile = props => {
  const [bookg, setBookng] = useState();

  useEffect(() => {
    fetch("https://cyf-react.glitch.me/customers/" + props.id)
      .then(res => {
        res.json();
      })
      .then(bookg => {
        setBookng(bookg);
      })
      .catch(error => console.error("error"));
  }, [props.id]);

  return (
    <div className="showId">
      <h3> show id {props.id} profile </h3>
      {/*<p>   {bookg.vpi}   </p>
  <p>   {bookg.phoneNumber}  </p>
    */}
      {bookg}
    </div>
  );
};
export default CustomerProfile;
