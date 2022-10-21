import React from 'react'

const TouristInfoCards = () => {
  return (
    <div>
      <div className="card">
        <img src="..." className="card-img-top" />
        <div className="card-body">
          <h1>Glasgow</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis esse nobis possimus unde odio assumenda.</p>
          <a href="peoplemakeglasgow.com" className="btn btn-primary">More Information</a>
        </div>
      </div>


      <div className="card">
        <img src="/home/mrmaroga/Videos/CODEyourFUTURE/React/cyf-hotel/cyf-hotel-react/src/imgs/cape-town.jpg" className="card-img-top" />
        <div className="card-body">
          <h1>Manchester</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, necessitatibus.</p>
          <a href="visitmanchester.com" className="btn btn-primary">More Information</a>
        </div>
      </div>

      <div className="card">
        <img src="..." className="card-img-top" />
        <div className="card-body">
          <h1>London</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt sed sapiente inventore ea in eligendi, perferendis magni nemo nulla quidem maxime nesciunt incidunt.</p>
          <a href="visitlondon.com" className="btn btn-primary">More Information</a>
        </div>
      </div>
    </div>)
}


export default TouristInfoCards;