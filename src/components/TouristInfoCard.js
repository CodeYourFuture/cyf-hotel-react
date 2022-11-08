import React from "react";

const TouristInfoCard = () => {
  return (
    <div className="container d-flex justify-content-around">
      <div className="card">
        <img
          className="card-image-top"
          src="https://webunwto.s3.eu-west-1.amazonaws.com/2022-03/the-glasgow-declaration-on-climate-action-in-tourism.jpg?VersionId=cf2W6IKXPBG11m3fcYlWSNQup_CTupWC"
          alt="glasgow"
        />
        <div className="card-body">
          <h1 className="card-title">Glasgow</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur,
            corrupti, minus quis quos sint ipsam sed eveniet veniam voluptate
            assumenda quod omnis non! Eos quod, eum distinctio non debitis
            repellat!
          </p>
          <a href="peoplemakeglasgow.com">More info</a>
        </div>
      </div>
      <div className="card">
        <img
          className="card-image-top"
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/3d/31/60/manchester-town-hall.jpg?w=700&h=-1&s=1"
          alt="Manchester"
        />
        <div className="card-body">
          <h1 className="card-title">Manchester</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
            reprehenderit necessitatibus quasi soluta quo aliquid. Labore velit,
            neque distinctio suscipit consequatur culpa illum odio quas sed
            consequuntur natus, earum accusamus!
          </p>
          <a href="visitmanchester.com">More info</a>
        </div>
      </div>
      <div className="card">
        <img
          className="card-image-top"
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?mw=640&hash=F7D574072DAD523443450DF57E3B91530064E4EE"
          alt="london"
        />
        <div className="card-body">
          <h1 className="card-title">London</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            exercitationem autem veritatis modi illum? Reprehenderit iure quos
            expedita possimus! Perferendis tempore beatae illum ullam accusamus
            placeat velit officia ad voluptate.
          </p>
          <a href="visitlondon.com">More info</a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCard;
