import React from 'react'
import logo from './logo.svg'
import './POPOSSpace.css';


function POPOSSpace(props) {
  const { name, image, address, hours } = props  
  return (
    <div className="POPOSSpace">
      <img 
        src={`${process.env.PUBLIC_URL}images/${image}`} 
        width="300" 
        height="300" 
        alt="Hello" 
      />
      <h1>{name}</h1>
      <div>{hours}</div>
      <div>{address}</div>
    </div>
  )
}

export default POPOSSpace