import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card-group">
      <div className="card">
        <img
          src="https://ih1.redbubble.net/image.867401111.1168/gbrf,8x10,f,540x540-pad,450x450,f8f8f8.u7.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Glasgow</h5>
          <p className="card-text">
            Glasgow is Scotland's largest city. It is known for its vibrant arts
            scene and cultural offerings.
          </p>
          <button>
            <a href={"https://peoplemakeglasgow.com"} target="_blank">
              Go to Glasgow..
            </a>
          </button>
        </div>
      </div>
      <div className="card">
        <img
          src="https://ih1.redbubble.net/image.839854687.2863/gbrf,8x10,f,540x540-pad,450x450,f8f8f8.u3.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Manchester</h5>
          <p className="card-text">
            Manchester is a dynamic city in England. It is famous for its
            football clubs and industrial heritage.
          </p>
          <button>
            <a href={"https://visitmanchester.com"} target="_blank">
              Go to Manchester..
            </a>
          </button>
        </div>
      </div>
      <div className="card">
        <img
          src="https://ih1.redbubble.net/image.839782820.0768/gbrf,8x10,f,540x540-pad,450x450,f8f8f8.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">London</h5>
          <p className="card-text">
            London is the capital of the United Kingdom. It is renowned for its
            iconic landmarks such as Big Ben and the Tower of London.
          </p>
          <button>
            <a href={"https://visitlondon.com"} target="_blank">
              Go to London..
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
