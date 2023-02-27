import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card-deck">
      <div className="card">
        <img
          src="https://media.timeout.com/images/105400989/750/422/image.jpg"
          className="card-img-top"
          alt="Glasgow"
        />
        <div className="card-body">
          <h5 className="card-title">Glasgow</h5>
          <p className="card-text">
            As Scotland’s largest city, Glasgow is famed for its culture,
            shopping and people.
          </p>
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            Visit Glasgow
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://www.visitengland.com/sites/default/files/manchester_3.jpg"
          className="card-img-top"
          alt="Manchester"
        />
        <div className="card-body">
          <h5 className="card-title">Manchester</h5>
          <p className="card-text">
            A revitalised Northern city fuelled by a love of soccer, art, and
            music.
          </p>
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            Visit Manchester
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/1a/f5/91/c7/a-table-with-an-outstanding.jpg"
          className="card-img-top"
          alt="London"
        />
        <div className="card-body">
          <h5 className="card-title">London</h5>
          <p className="card-text">
            London is layered with history, where medieval and Victorian
            complement a rich and vibrant modern world.
          </p>
          <a href="https://www.visitlondon.com/" className="btn btn-primary">
            Visit London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
