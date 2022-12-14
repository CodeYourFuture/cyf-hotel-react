import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="container">
      <div className="card">
        <img
          src="https://media.istockphoto.com/id/531399363/photo/gateshead-evening.jpg?s=612x612&w=0&k=20&c=gSbk_rIZ0n3k3nG0cz6Uj9mLP_PkL1T1vV_XiIYpPO4="
          className="card-img-top"
        />
        <div className="card-body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            labore?
          </p>
          <a
            href="https://peoplemakeglasgow.com"
            className="btn btn-primary"
            target="_blank"
          >
            Glasgow
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://media.istockphoto.com/id/1141676822/photo/manchester-new-hampshire-usa-skyline-on-the-merrimack-river.jpg?s=612x612&w=0&k=20&c=tzxqT2orgg_4aT_0Dvk59Igo6EcZnGIg_31LHVa2alI="
          className="card-img-top"
        />
        <div className="card-body">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            dicta.
          </p>
          <a
            href="https://visitmanchester.com"
            className="btn btn-primary"
            target="_blank"
          >
            Manchester
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://thumbs.dreamstime.com/b/big-ben-london-autumn-leaves-32915756.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            hic nihil iure.
          </p>
          <a
            href="https://visitlondon.com"
            className="btn btn-primary"
            target="_blank"
          >
            London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
