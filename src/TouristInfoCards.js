import React from 'react'

const TouristInfoCard = props => {
  return (
    <div className='card' style={{ width: '18rem', right: '4' }}>
      <img src={props.image} className='card-img-top' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>{props.location}</h5>

        <a href={props.link} target='_blank' className='btn btn-primary'>
          Find out More
        </a>
      </div>
    </div>
  )
}
export default TouristInfoCard
