import React from 'react'

const TouristInfoCard = props => {
  return (
    <div className='card' style={{ width: '25rem', right: '4' }}>
      <figure className='image-container'>
        <img src={props.image} className='card-img-top' alt={props.location} />
      </figure>
      <div className='card-body'>
        <h4 className='card-title'>{props.location}</h4>
        <p>test text</p>
        <a href={props.link} target='_blank' className='btn btn-primary'>
          Explore {props.location}
        </a>
      </div>
    </div>
  )
}
export default TouristInfoCard
