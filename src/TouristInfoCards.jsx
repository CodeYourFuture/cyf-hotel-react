import React from "react";

const TouristInfoCard = () => {
  return (
    <div className="cards">
      <div className="card">
        <img
          src="https://a.cdn-hotels.com/gdcs/production95/d16/cc514640-8f0f-11e8-9bad-0242ac110002.jpg"
          alt="Glasgow city center"
          className="card-img"
        />
        <h1>Glasgow</h1>
        <p className="card-paragraph">
          Glasgow is a port city on the River Clyde in Scotland's western
          Lowlands. It's famed for its Victorian and art nouveau architecture, a
          rich legacy of the city's 18th–20th-century prosperity due to trade
          and shipbuilding. Today it's a national cultural hub, home to
          institutions including the Scottish Opera, Scottish Ballet and
          National Theatre of Scotland, as well as acclaimed museums and a
          thriving music scene.
        </p>
        <div className="card-btn-container">
          <a href="http://peoplemakeglasgow.com/" target="_blank">
            <button className="card-btn">More information</button>
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://omghcontent.affino.com/AcuCustom/Sitename/DAM/107/GREATER-MANCHESTER-MIN_MainSH.jpg"
          alt="Manchester city in the evening"
          className="card-img"
        />
        <h1>Manchester</h1>
        <p className="card-paragraph">
          Manchester is a major city in the northwest of England with a rich
          industrial heritage. The Castlefield conservation area’s 18th-century
          canal system recalls the city’s days as a textile powerhouse, and
          visitors can trace this history at the interactive Museum of Science.
          The revitalised Salford Quays dockyards now house the Daniel
          Libeskind-designed Imperial War Museum North and the Lowry cultural
          centre.
        </p>
        <div className="card-btn-container">
          <a href="https://www.visitmanchester.com/" target="_blank">
            <button className="card-btn">More information</button>
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/campaigns/international-recovery-campaign/lets-do-london-related-international-640.jpeg?mw=640&hash=477E6FF9F31F292EE017E5BA63027C7054EB39A0"
          alt="London bridge at the evening"
          className="card-img"
        />
        <h1>London</h1>
        <p className="card-paragraph">
          London is the capital of Great Britain. It is situated in the
          southeast of England on the River Thames and there are lots of bridges
          across the Thames. The most famous of these bridges is Tower Bridge.
          The machinery which draws up the bridge when a ship passes under it is
          hidden in the two towers. Near Tower Bridge, on the north bank of the
          Thames there is the Tower Of London.
        </p>
        <div className="card-btn-container">
          <a href="https://www.visitlondon.com/" target="_blank">
            <button className="card-btn">More information</button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCard;
