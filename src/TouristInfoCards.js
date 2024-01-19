import React from "react";

function TouristInfoCards() {
  return (
    <div className="card-container">
      <a className="card-link" href="" target="_blank">
        <div className="singl-card">
          <div className="card-head">
            <h1 className="city-name"> London </h1>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxzeZX2jass6oezzGFv7auBlIgs2cZ9NSsTQ&usqp=CAU"
              className="card-img-top" alt="london"
            />
          </div>
          <div className="card-body">
            <p>
              London is the capital and largest city of England and the United
              Kingdom.[9][10] Standing on the River Thames in south-east England
              at the head of a 50-mile (80 km) estuary down to the North Sea, it
              has been a major settlement for two millennia.[11] The City of
              London, its ancient core and financial centre, was founded by the
              Romans as Londinium and retains boundaries close to its medieval
              ones.[note 1][12][13][14][15][16] Since the 19th
              century,[17][18][19] "London" has also referred to the metropolis
              around this core, historically split between the counties of
              Middlesex, Essex, Surrey, Kent, and Hertfordshire,[20] which
              largely makes up Greater London,[21] the region governed by the
              Greater London Authority.[note 2][22][23][24] The City of
              Westminster, to the west of the City, has for centuries held the
              national government and parliament.
            </p>
            <a href="peoplemakeglasgow.com">
              {" "}
              <a href = "https://en.wikipedia.org/wiki/London"><button className="app-btn">About London </button></a>
            </a>
          </div>
        </div>
      </a>
      <a className="card-link" href="" target="_blank">
        <div className="singl-card">
          <div className="card-head">
            <h1 className="city-name"> Manchester</h1>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHu5lonofGgjxatZbdw43PeFZooYqnVcNjpQ&usqp=CAU"
              className="card-img-top"
            />
          </div>
          <div className="card-body">
            <p>
              Manchester (/ˈmæntʃɪstər, -tʃɛs-/)[5][6] is a city and
              metropolitan borough in Greater Manchester, England. The city has
              the country's fifth-largest population at 547,627 (as of 2018)[7]
              and lies within the United Kingdom's second-most populous urban
              area, with a population of 2.7 million,[8] third most-populous
              county, at around 2.8 million,[9] and third-most populous
              metropolitan area, with a population of 3.3 million.[10] It is
              fringed by the Cheshire Plain to the south, the Pennines to the
              north and east, and an arc of towns with which it forms a
              continuous conurbation.[11] The local authority for the city is
              Manchester City Council.
            </p>
            <a href="visitmanchester.com">
              {" "}
              <a href = "https://en.wikipedia.org/wiki/Manchester"><button className="app-btn">About Manchester </button> </a>
            </a>
          </div>
        </div>
      </a>
      <a className="card-link" href="" target="_blank">
        <div className="singl-card">
          <div className="card-head">
            <h1 className="city-name"> Glasgow</h1>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbFEW-vqJMsI8u8k__N06w0Lzk4SOqO2UuMA&usqp=CAU"
              className="card-img-top"
            />
          </div>
          <div className="card-body">
            <p>
              Glasgow (Scots: Glesga; Scottish Gaelic: Glaschu) is the most
              populous city in Scotland and the fourth-most populous city in the
              United Kingdom, as well as being the 27th largest city by
              population in Europe.[6] In 2020, it had an estimated population
              of 635,640. Historically part of Lanarkshire, the city now forms
              the Glasgow City council area, one of the 32 council areas of
              Scotland, and is governed by Glasgow City Council. Glasgow is
              situated on the River Clyde in the country's West Central
              Lowlands. It is the fifth-most visited city in the United
              Kingdom.[7]
            </p>
            <a href="visitlondon.com">
              <a href ="https://en.wikipedia.org/wiki/Glasgow"><button className="app-btn">About Glasgow </button></a>
            </a>
          </div>
        </div>
      </a>
    </div>
  );
}
export default TouristInfoCards;
