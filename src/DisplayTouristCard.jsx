import React from "react";
import TouristInfoCards from "./TouristInfoCard";
function DisplayTouristCard() {
  return (
    <div class="row">
      <div class="col-sm">
        <TouristInfoCards
          imageURL="https://d1v9sz08rbysvx.cloudfront.net/careers/media/assets/shutterstock_10061808040-glasgow-town.jpg?ext=.jpg"
          Name="Glasgow"
          descriptionText="As the city begins re-opening here' s how you can safely enjoy your time in Glasgow, from a long-awaited shopping trip to exploring our diverse neighbourhoods 
        and experiencing the city's 
        arts, creative and cultural scene virtually."
          moreInfoLink="https://peoplemakeglasgow.com/glasgow-now"
        />
      </div>
      <div class="col-sm">
        <TouristInfoCards
          imageURL="https://governmentbusiness.co.uk/sites/default/files/william-mccue-508892-unsplash_1.jpg"
          Name="Manchester"
          descriptionText="Welcome to the official tourism site of Greater Manchester where you can search for things to do and find out what's on, as well as getting inspiration for your visit to this fantastic city region.
        Youthful, diverse, energetic and bursting with character; "
          moreInfoLink="https://www.visitmanchester.com/"
        />
      </div>
      <div class="col-sm">
        <TouristInfoCards
          imageURL="https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg"
          Name="London"
          descriptionText="Welcome to Visit London, your official city guide to London, England. Find things to do in London, days out in London, London attractions and sightseeing, what' s on, London events, theatre, tours, restaurants and hotels in London. Plan your trip to London with useful traveller information."
          moreInfoLink="https://www.visitlondon.com/"
        />
      </div>
    </div>
  );
}

export default DisplayTouristCard;
