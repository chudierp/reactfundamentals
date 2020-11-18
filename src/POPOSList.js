import React from 'react';
import POPOSSpace from './POPOSSpace';

function POPOSList() {
  return (
    <div className="POPOSList">
      <POPOSSpace
        name="50 California Street"
        address="50 California St."
        image="50-california-st.jpg"
      />
      <POPOSSpace 
        name="100-pine"
        address="100-pine street"
        image="100-pine.jpg"
      />
      <POPOSSpace 
        name="101-california"
        address="101-california street"
        image="101-california.jpg"
      />
      <POPOSSpace 
        name="343-sansome-roof-garden"
        address="343-sansome-roof-garden street"
        image="343-sansome-roof-garden.jpg"
      />
      <POPOSSpace 
        name="525-market-street-plaza"
        address="525-market-street-plaza street"
        image="525-market-street-plaza.jpg"
      />
      <POPOSSpace 
        name="555-california"
        address="555-california street"
        image="555-california.jpg"
      />
    </div>
  )
}


export default POPOSList