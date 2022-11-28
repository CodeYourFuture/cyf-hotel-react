import React, { useState, useEffect } from "react";

function CustomerProfile({ id }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://cyf-react.glitch.me/customers/${id}")
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setItems(result);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h2>Customer id :</h2>
        <p>Email:</p>
        <p>Vip Status:</p>
        <p>Phone Number:</p>
      </div>
    );
  }
}

export default CustomerProfile;

// const [profile, setProfile] = useState("");
// useEffect(() => {
//   fetch(`https://cyf-react.glitch.me/customers/${id}`)
//     .then((res) => res.json())
//     .then((data) => setProfile(data));
//   console.log(data);
// }, [id]);
// return (
//   <div>
//     <h2>Customer id :</h2>
//     <p>Email:</p>
//     <p>Vip Status:</p>
//     <p>Phone Number:</p>
//   </div>
// );
