import React from 'react'
import logo from './logo.svg'
import './POPOSSpace.css';
import { Link } from 'react-router-dom';


function POPOSSpace(props) {
  const { name, image, address, hours, id } = props  
  return (
    <div className="POPOSSpace">
      <Link to={`/details/${id}`}>
        <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" />
      </Link>
      <h1>
        <Link to={`/details/${id}`}>
          {name}
        </Link>
      </h1>
      <div>{hours}</div>
      <div>{address}</div>
    </div>
  )
}

export default POPOSSpace