import React from "react";

const TouristInfoCards = () => {
  return (
    <div class="card-container">
      <div class="card">
        <img
          src="https://www.whatsonnetwork.co.uk/uploads/800x600/251d1ca49b01dd9048ef9967e46bf339.jpg"
          class="card-img-top"
        />
        <div class="card-body">
          <a href="https://peoplemakeglasgow.com" class="btn btn-primary">
            Go Glasgow
          </a>
        </div>
      </div>
      <div class="card">
        <img
          src="https://static.independent.co.uk/2021/11/03/15/ManchesterRecoveryCampaign-32.jpg?quality=75&width=982&height=726&auto=webp"
          class="card-img-top"
        />
        <div class="card-body">
          <a href="https://visitmanchester.com" class="btn btn-primary">
            Go Manchester
          </a>
        </div>
      </div>
      <div class="card">
        <img
          src="https://media.architecturaldigest.com/photos/56fd9d65ecd154e0329c1627/4:3/w_768/london-travel-guide-lede.jpg"
          class="card-img-top"
        />
        <div class="card-body">
          <a href="https://visitlondon.com" class="btn btn-primary">
            Go London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
