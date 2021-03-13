import React from "react";
import Card from "./Card";
const TouristInfoCards = () => {
  return (
    <div className="info-cards">
      <Card
        src="https://images.unsplash.com/photo-1571494146906-86de15d3817b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Z2xhc2dvd3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        name="Glasgow"
        link="peoplemakeglasgow.com"
      />
      <Card
        src="https://images.unsplash.com/photo-1588934356018-93c066684704?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuY2hlc3RlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        name="Manchester"
        link="visitmanchester.com"
      />
      <Card
        src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZG9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        name="London"
        link="visitlondon.com"
      />
    </div>
  );
};

export default TouristInfoCards;
