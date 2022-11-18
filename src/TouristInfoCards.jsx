import React from "react";

function TouristInfoCards() {
  return (
    <div className="card">
      <div>
        <img
          src="https://www.traveldrafts.com/wp-content/uploads/2020/08/Glasgow-famous-cover.jpg"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h2>Glasgow</h2>
          <p>
            In Glasgow’s chapter of our famous things across the globe series,
            we have invited our fellow blogger Graham Grieve of “My Voyage
            Scotland” What is Glasgow famous for? This is his interesting
            response! Glasgow is the largest city in Scotland, often overlooked
            by tourists in favor of the country’s capital, Edinburgh. It is
            arguably the more authentic and welcoming city of the two. It is a
            city brimming with history, charm, and its very own kind of vibrant,
            unique culture.{" "}
          </p>
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            Visit Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Hk46LBm_TSzVA1tTaGg5kBt7pwDUusk2bA&usqp=CAU"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h2>Manchester</h2>
          <p>
            It’s a city of contrasts, with one of the UK’s most multicultural
            population, an eclectic mix of heritage and a wide choice of
            sporting teams from two world famous football clubs, to county
            cricket teams, to rugby union and rugby league teams.
          </p>
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            visit Manchester
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZEoVMvhiEHBQNNN2UV3BG6HM8lyISW9F2jA&usqp=CAU"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h2>London</h2>
          <p>
            London, city, capital of the United Kingdom. It is among the oldest
            of the world’s great cities—its history spanning nearly two
            millennia—and one of the most cosmopolitan. By far Britain’s largest
            metropolis, it is also the country’s economic, transportation, and
            cultural centre.
          </p>
          <a href="https://www.visitlondon.com/" className="btn btn-primary">
            visit London
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
