import React from 'react'
import DataCities from './data/DataCities.json'
import "./App.css"

function TouristInfoCards() {
  return (
    <div className='cards'>
        {DataCities.map((item, index) =>(
                <div key={index*index+6} className= "card">
                    <img className='images' src={item.image} alt={item.nameCity}/>
                    <div className='card-body'>
                        <h1 className='card-title'>{item.nameCity}</h1>
                        <p className='card-discription'>{item.description}</p>
                        <a className='btn btn-primary' href={item.link}>More Informatin</a>
                    </div>
                </div>
        ))}
    </div>
  )
}

export default TouristInfoCards