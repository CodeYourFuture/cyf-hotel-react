import React from 'react'

export default function Footer(props) {
    const li = props.data.map((data, index) => <li key={index}>{data}</li>)
  return (
      <ul>
         {li} 
    </ul>
  )
}
