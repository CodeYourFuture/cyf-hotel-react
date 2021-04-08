import React from "react";
import TouristInfoCard from "./TouristInfoCard";

const TouristInfoCards = () => {
  return (
    <div id="infoCards">
      <TouristInfoCard
        city="Glasgow"
        link="https://peoplemakeglasgow.com"
        src="https://images.unsplash.com/photo-1537528455251-0fdce4cd6741?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      />
      <TouristInfoCard
        city="Manchester"
        link="https://visitmanchester.com"
        src="https://www.visitmanchester.com/imageresizer/?image=%2fdbimgs%2fCastlefield%20Basin(1).jpg&action=BlogDetailContent"
      />
      <TouristInfoCard
        city="London"
        link="https://visitlondon.com"
        src="https://cdn.londonandpartners.com/-/media/images/london/visit/general-london/towerbridgecopyrightvisitlondoncomantoinebuchet.jpg?mw=1920&hash=B6672601055B38B34C592E0160B0445AA063B876"
      />
    </div>
  );
};

export default TouristInfoCards;
