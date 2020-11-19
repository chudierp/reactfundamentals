import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import data from './sfpopos-data.json';

const titles = data.map((obj) => {
    return <h1>{obj.title}</h1>
  })

  function POPOSList() {

    const spaces = data.map((obj) => {
        // Deconstruct obj into properties
        const { title, address, images, hours } = obj
      
        return (
          <POPOSSpace
            key={title}
            hours={hours}
            name={title}
            address={address}
            image={images[0]}
          />
        )
      })
  
    return (
      <div className="POPOSList">
        { spaces }
      </div>
    )
  }
  
  export default POPOSList