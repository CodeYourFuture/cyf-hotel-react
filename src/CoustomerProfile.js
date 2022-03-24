import React, { useEffect, useState } from "react";

const CustomerProfile = () => {
  const [bookng, setBookng] = useState([]);
  useEffect(() => {
    fetch(``)
      .then(response => response.json())
      .then(bookng => {
        setBookng(bookng);
      });
  });
  return <div>{bookng.id}</div>;
};
export default CustomerProfile;
