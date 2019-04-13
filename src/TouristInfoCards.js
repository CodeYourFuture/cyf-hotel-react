import React from 'react'

const TouristInfoCards = props => {
  return (
    <div class='card' style={{ width: '18rem', right: '4' }}>
      <img src={props.image} class='card-img-top' alt='...' />
      <div class='card-body'>
        <h5 class='card-title'>{props.location}</h5>

        <a href={props.link} target='_blank' class='btn btn-primary'>
          Find out More
        </a>
      </div>
    </div>
  )
}
export default TouristInfoCards
