import React from "react";

function InfoCards() {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src="https://media.timeout.com/images/105400989/750/422/image.jpg"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h3> Glasgow</h3>
          <p>
            Glasgow is the largest city in Scotland, often overlooked by
            tourists in favor of the country’s capital, Edinburgh. It is
            arguably the more authentic and welcoming city of the two. It is a
            city brimming with history, charm, and its very own kind of vibrant,
            unique culture. From inception as a small rural settlement on the
            River Clyde
          </p>

          {/* <p>
            From its humble beginnings as a small rural settlement on the River
            Clyde, it rapidly expanded into an industrial hub of international
            trade and shipbuilding before maturing into the creative and diverse
            city that it is today. Glasgow has a lot to be proud of.
          </p> */}
          <a
            href="https://peoplemakeglasgow.com/"
            className="btn btn-primary visit-city"
          >
            Visit Glasgow
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://cdn.britannica.com/42/116342-050-5AC41785/Manchester-Eng.jpg"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h3> Manchester</h3>
          <p>
            Manchester has a proud history in science, politics, music, arts and
            sport. And today the city combines this heritage with a progressive
            vision to be a city that delivers surprise and delight in equal
            measures. The city centre is jam-packed with unique and eclectic
            restaurants, bars, shops, museums, galleries, hotels
            {/*  Manchester city centre is jam-packed with unique and
            eclectic restaurants, bars, shops, museums, galleries, hotels and
            places to stay whilst the surrounding Greater Manchester boroughs
            offer a patch-work of visitor experiences including quaint market
            towns, traditional pubs and beautiful green spaces and waterways to
            be explored on foot or bike. The city region is easily navigated,
            with great transport links both in and around Greater Manchester. */}
          </p>
          <p />
          <a
            href="https://visitmanchester.com/"
            className="btn btn-primary visit-city"
          >
            Visit Manchester
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/campaigns/international-recovery-campaign/lets-do-london-related-international-640.jpeg?mw=640&hash=477E6FF9F31F292EE017E5BA63027C7054EB39A0"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h3> London</h3>
          {/* <p id="desc">
            <em>Capital of England</em>
          </p> */}
          <p>
            London, the capital of England and the United Kingdom, is a
            21st-century city with history stretching back to Roman times. At
            its centre stand the imposing Houses of Parliament, the iconic ‘Big
            Ben’ clock tower and Westminster Abbey, site of British monarch
            coronations. Across the Thames River.
            {/* the London Eye observation
            wheel provides panoramic views of the South Bank cultural complex,
            and the entire city. */}
          </p>
          <a
            href="https://visitlondon.com/"
            className="btn btn-primary visit-city"
          >
            Visit London
          </a>
        </div>
      </div>
    </div>
  );
}

export default InfoCards;
