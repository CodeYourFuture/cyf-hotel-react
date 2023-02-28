import { Card } from "./Card";
import React from "react";

export const TouristInfoCards = () => {
  return (
    <div className="cards-wrapper">
      <Card
        url="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?mw=640&hash=F7D574072DAD523443450DF57E3B91530064E4EE"
        location="Lonon Eye"
        city="London"
        description="From the modern London Eye to the historic Tower of London, the top 10 tourist attractions in London are a must-see on any London sightseeing trip. Even better, many London landmarks are free to visit."
        link="https://visitlondon.com"
      />
      <Card
        url="https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdmsimgs%2Fjohn-rylands-library_1__2044587576.jpg&action=ProductListMain"
        location="John Rylands Library"
        city="Manchester"
        description="Manchester River Cruises run regular sightseeing trips from Salford Quays on board the Dutch built 'Princess Katherine'. From the 50 minute Quays Adventures trips to a 4 1/2 hour expedition to Ellesmere Port."
        link="https://visitmanchester.com"
      />
      <Card
        url="https://peoplemakeglasgow.com/imager/general/76583/West-end-Tall-Ship-and-Riverside-Museum-Content-Block_8dc3bdbc8660ad389ec95cdf9b15d797.jpg"
        location="Riverside Museum"
        city="Glasgow"
        description="You are sure of a warm welcome with the friendly guides at Walking Tours in Glasgow. From street art to Mackintosh and the city centre to bespoke tours. Enjoy exploring the city at your own pace with an audio walking tour."
        link="https://peoplemakeglasgow.com"
      />
    </div>
  );
};
