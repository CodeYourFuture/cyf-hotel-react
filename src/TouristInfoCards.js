import React from "react";

function TouristInfoCards() {
  return (
    <div className="row">
      <div className="card col-4 text-center">
        <img
          src="http://www.scottishhousingnews.com/wp-content/uploads/sites/21/2018/07/glasgow-city-chambers-PIXA.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h4>Glasgow</h4>
          <p>
            Glasgow grew from a small rural settlement on the River Clyde to
            become the largest seaport in Scotland, and tenth largest by tonnage
            in Britain. Expanding from the medieval bishopric and royal burgh,
            and the later establishment of the University of Glasgow in the 15th
            century, it became a major centre of the Scottish Enlightenment in
            the 18th century.
          </p>
          <a href="https://peoplemakeglasgow.com/" className="btn btn-light">
            More Information
          </a>
        </div>
      </div>
      <div className="card col-4 text-center">
        <img
          src="https://a.cdn-hotels.com/gdcs/production106/d980/dfbdfe50-5862-11e8-b0ec-0242ac11000c.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h4>Manchester</h4>
          <p>
            Throughout the Middle Ages Manchester remained a manorial township,
            but began to expand "at an astonishing rate" around the turn of the
            19th century. Manchester's unplanned urbanisation was brought on by
            a boom in textile manufacture during the Industrial Revolution, and
            resulted in it becoming the world's first industrialised city.
            Manchester achieved city status in 1853.
          </p>
          <a href="https://www.visitmanchester.com/" className="btn btn-light">
            More Information
          </a>
        </div>
      </div>
      <div className="card col-4 text-center">
        <img
          src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_3000,h_2000,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/ikknf4oeysojhyv2z0jk/BigliettiperilLondonEye.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h4>London</h4>
          <p>
            London is one of the world's most important global cities. It exerts
            a considerable impact upon the arts, commerce, education,
            entertainment, fashion, finance, healthcare, media, professional
            services, research and development, tourism and transportation. It
            is one of the largest financial centres in the world and in 2019,
            London had the second highest number of ultra high-net-worth
            individuals in Europe, after Paris.
          </p>
          <a href="https://visitlondon.com/" className="btn btn-light">
            More Information
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
