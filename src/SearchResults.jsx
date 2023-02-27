import React from 'react'

function SearchResults(props) {
    console.log(props);
  return (

        <tbody className='tableList'>
            
            <tr>{props.id}</tr>
            <tr>{props.title}</tr>
            <tr>{props.firstName}</tr>
            <tr>{props.surename}</tr>
            <tr>{props.email}</tr>
            <tr>{props.roomId}</tr>
            <tr>{props.checkInDate}</tr>
            <tr>{props.checkOutDate}</tr>
        </tbody>
   
  )
}

export default SearchResults