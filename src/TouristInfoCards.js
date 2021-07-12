import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src="https://cdnp.flypgs.com/files/Sehirler-long-tail/Manchester/manchester-kopru-.jpg"
          alt="Manchester"
          className="card-img-top"
        />
        <div className="card-body">
          <p>Manchester</p>
          <a
            href="https://www.visitmanchester.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://metro.co.uk/wp-content/uploads/2018/03/826222936.jpg?quality=90&strip=all"
          alt="Glasgow"
          className="card-img-top"
        />
        <div className="card-body">
          <p>Glasgow</p>
          <a
            href="https://peoplemakeglasgow.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/general-london/jl_201410_visit_london_1801-edit.jpg?mw=1030&hash=5925E97836C2219F839926B932015987707BB7E7"
          alt="London"
          className="card-img-top"
        />
        <div className="card-body">
          <p>London</p>
          <a
            href="https://visitlondon.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
