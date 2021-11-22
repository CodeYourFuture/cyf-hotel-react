import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="touristCards">
      <div className="card">
        <h2>Glasgow</h2>
        <img
          className="card-img-top"
          alt=""
          src="https://www.shoosmiths.co.uk/-/media/images/locations/glasgow.jpg"
        />

        <div className="card-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            a tempor orci. Sed rutrum rhoncus quam quis tincidunt. Nam ut
            porttitor leo. Duis a augue laoreet lorem faucibus rutrum a at
            magna. Vestibulum eget tristique tellus, eget pellentesque leo.
            Maecenas nec mattis urna. Nulla facilisi. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Pellentesque eget interdum nibh, ut ornare sem. Sed sit
            amet neque nec velit tincidunt dapibus.
          </p>
          <a
            href="https://www.peoplemakeglasgow.com"
            className="btn btn-primary"
          >
            Visit Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <h2>Manchester</h2>
        <img
          className="card-img-top"
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafW6HNomi2PI6QZj5iJtm8B2VVsnqO5VLYA&usqp=CAU"
        />

        <div className="card-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            a tempor orci. Sed rutrum rhoncus quam quis tincidunt. Nam ut
            porttitor leo. Duis a augue laoreet lorem faucibus rutrum a at
            magna. Vestibulum eget tristique tellus, eget pellentesque leo.
            Maecenas nec mattis urna. Nulla facilisi. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Pellentesque eget interdum nibh, ut ornare sem. Sed sit
            amet neque nec velit tincidunt dapibus.
          </p>
          <a href="https://www.visitmanchester.com" className="btn btn-primary">
            Visit Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <h2>London</h2>
        <img
          className="card-img-top"
          alt=""
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/towerbridge-640x360.jpg?mw=640&hash=9FF3EBA9414733318A48ABDB4F58FBEB3B7E29AC"
        />

        <div className="card-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            a tempor orci. Sed rutrum rhoncus quam quis tincidunt. Nam ut
            porttitor leo. Duis a augue laoreet lorem faucibus rutrum a at
            magna. Vestibulum eget tristique tellus, eget pellentesque leo.
            Maecenas nec mattis urna. Nulla facilisi. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Pellentesque eget interdum nibh, ut ornare sem. Sed sit
            amet neque nec velit tincidunt dapibus.
          </p>
          <a href="https://www.visitlondon.com" className="btn btn-primary">
            Visit London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
