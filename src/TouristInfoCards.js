import React from "react";

function TouristInfoCards() {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src="https://media.istockphoto.com/photos/squinty-bridge-glasgow-picture-id469974825?k=20&m=469974825&s=612x612&w=0&h=SHYq92xjEKGDNZU1sVBnhQJKsTtujh7vv-psQ_zCNyw="
          className="card-img-top"
        />
        <div className="card-body">
          <p> Glasgow's Smiles Better! </p>
          <a
            href="https://peoplemakeglasgow.com"
            target="_blank"
            className="btn btn-primary"
          >
            Visit us!
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://www.worldcapitalinstitute.org/wp-content/uploads/2018/05/manchester.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <p> On the 6th day God made Manchester </p>
          <a
            href="https://visitmanchester.com"
            className="btn btn-primary"
            target="_blank"
          >
            Visit us!
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://s3-eu-west-1.amazonaws.com/eflanguagesblog/wp-content/uploads/2018/11/28213305/12_London_tube_stops_with_strange_names_blog_hero.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <p> London Baby! </p>
          <a
            href="https://visitlondon.com"
            className="btn btn-primary"
            target="_blank"
          >
            Visit us!
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
