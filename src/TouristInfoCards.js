import React from "react";
// const cssStyle={
//     width:"20px",
//     height:"20px",
//     color:'rgb(255,0,0)'

// }
function TouristInfoCards() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {/* ......london */}
      <div className="card">
        <img src="" className="card-img-top" alt="card" />
        <div className="card-body">
          <a href="http://visitlondon.com" className="btn btn-primary">
            LONDON
          </a>
        </div>
      </div>
      {/* ......lManchester */}
      <div className="card">
        <img src="./images/london.jpeg" className="card-img-top" alt="card" />
        <div className="card-body">
          <a href="http://visitmanchester.com" className="btn btn-primary">
            Manchester
          </a>
        </div>
      </div>
      {/* ......Glasgow */}
      <div className="card">
        <img src="..." className="card-img-top" alt="card" />
        <div className="card-body">
          <a href="http://peoplemakeglasgow.com" className="btn btn-primary">
            Glasgow
          </a>
        </div>
      </div>
    </div>
  );
}
export default TouristInfoCards;
