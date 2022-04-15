import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="TourCard">
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1579117268189-86a2276e5af4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdsYXNnb3d8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
          className="card-img-top"
        />
        <h1>Glasgow</h1>
        <p>
          Glasgow's city centre is home to flagship stores, impressive shopping
          centres and designer favourites all within an easily walkable area.
        </p>
        <div className="card-body">
          <a
            target={"_blank"}
            href="https://peoplemakeglasgow.com/"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1597740049284-388659a41286?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFuY2hlc3RlciUyMGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
          className="card-img-top"
        />

        <h1>Manchester </h1>
        <p>
          Welcome to the official tourism site of Greater Manchester where you
          can search for things to do in Manchester and find out what's on.
        </p>
        <div className="card-body">
          <a
            target={"_blank"}
            href="https://www.visitmanchester.com/ "
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
          className="card-img-top"
        />
        <h1>London </h1>
        <p>
          Welcome to London! Discover the best of London with Visit London, the
          official guide to England’s exciting capital. Find things to do in
          London
        </p>
        <div className="card-body">
          <a
            target={"_blank"}
            href="https://visitlondon.com/"
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
