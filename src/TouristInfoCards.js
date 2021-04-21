import React from "react";

function TouristInfoCards() {
  return (
    <div className="cards-wrapper">
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1546867042-cdba19743124?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjkxfHxnbGFzZ293fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          className="card-img-top"
          alt="Glasgow"
        />
        <div className="card-body">
          <a
            href="http://www.peoplemakeglasgow.com"
            className="btn btn-primary"
          >
            More Information
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1579379500738-fc02326916d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDE3fHxtYW5jaGVzdGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60"
          className="card-img-top"
          alt="Manchester"
        />
        <div className="card-body">
          <a href="http://www.visitmanchester.com" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1488747279002-c8523379faaa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60"
          className="card-img-top"
          alt="London"
        />
        <div className="card-body">
          <a href="http://www.visitlondon.com" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>
    </div>
  );
}
export default TouristInfoCards;
