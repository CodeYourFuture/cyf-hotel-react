import React from "react";

const TouristInfoCard = () => {
  return (
    <div className="container">
      <div className="card">
        <img
          src="https://media.timeout.com/images/105400989/750/422/image.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h2>Glasgow</h2>
          <p>
            With its elegant Victorian architecture and downright cool music and
            club scenes, Glasgow is a city of many characters, each as
            interesting as the next. This, coupled with the friendly and
            welcoming patter of the city's residents, makes it a place that is
            well-worth your time.
          </p>
          <a href="https://peoplemakeglasgow.com" className="btn btn-primary">
            Read More...
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://www.visitbritain.com/sites/default/files/consumer/paragraphs-bundles/image-header-with-text/manchester_town_hall_ve13463_1200x600_0_1_0_0.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h2>manchester</h2>
          <p>
            These days the UK's second most populous city is more famous for its
            nightlife, student population, music and sports. It was recently
            voted the third best city in the world to live in, and there are
            reasons for that!
          </p>
          <a href="https://visitmanchester.com" className="btn btn-primary">
            Read More...
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?mw=640&hash=F7D574072DAD523443450DF57E3B91530064E4EE"
          className="card-img-top"
        />
        <div className="card-body">
          <h2>London</h2>
          <p>
            From the modern London Eye to the historic Tower of London, the top
            10 tourist attractions in London are a must-see on any London
            sightseeing trip. Even better, many London landmarks are free to
            visit. Use the London attractions map to find them all.
          </p>
          <a href="https://visitlondon.com" className="btn btn-primary">
            Read More...
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCard;
