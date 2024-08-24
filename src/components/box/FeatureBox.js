import React from 'react'

export const FeatureBox = ({ item }) => (
  <div className='featureBox'>
    <div className="itemCenter">
      <span className="featureIcon itemCenter">
        <img src={item.icon} alt={item.icon} style={{ width: '41%' }} />
      </span>
    </div>
    <p className="featureBoxTitle">{item.title}</p>
  </div>
)