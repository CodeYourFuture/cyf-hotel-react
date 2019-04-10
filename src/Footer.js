import React from 'react'

const Footer = (props) =>{
  return (
    <footer className ='container'>
      <div className ="d-flex justify-content-center">
        <ul id="menu">
          {props.address.map((addressPart, index) => {
            return (
              <li key={index}>
                {addressPart}
              </li>
            )
          })}


        </ul>
      </div>
    </footer>
  )
}



export default Footer
