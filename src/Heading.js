import React from 'react'
import Clock from './Clock'
const Heading = () => {
  return (
    <div>
      <header className='App-header row'>
        <img
          alt='logo'
          src='https://cdn.worldvectorlogo.com/logos/marriott.svg'
          className='App-logo'
        />{' '}
        <h2>CYF Hotel</h2>
        <Clock />
      </header>
    </div>
  )
}
export default Heading
