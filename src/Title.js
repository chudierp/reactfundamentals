
import React from 'react'
import logo from './logo.svg'
import './Title.css';

function Title() {
  return (
    <div className="Title">
      <h1>SFPOPOS</h1>
      <img src={logo}/>
      <div className="Title-Subtitle">San Franciscos Privately Owned Public Spaces</div>
    </div>
  )
}

export default Title

