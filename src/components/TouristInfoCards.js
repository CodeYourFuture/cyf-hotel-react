import React from "react";

let data = [
  {
    link: "https://peoplemakeglasgow.com",
    image:
      "https://s19623.pcdn.co/wp-content/uploads/2015/10/A-weekend-in-Glasgow-48-hour-itinerary-1080x675.jpg",
    summary:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    destination: "Glasgow"
  },
  {
    link: "https://visitmanchester.com",
    image:
      "https://www.complete-ltd.com/wp-content/uploads/2020/01/Manchester_Tram-1024x683.jpeg",
    summary:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    destination: "Manchester"
  },
  {
    link: "https://visitlondon.com",
    image:
      "https://images.unsplash.com/photo-1522961881734-7df1e2635d0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    summary:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    destination: "London"
  }
];
function TouristInfoCards() {
  return (
    <div>
      {data.map((i, index) => {
        return (
          <div key={index} className="card">
            <img src={i.image} className="card-img-top" />
            <div className="card-body">
              <p>{i.summary}</p>
              <a href={i.link} className="btn btn-primary">
                {i.destination}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TouristInfoCards;
