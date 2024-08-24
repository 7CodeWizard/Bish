import React from 'react'
import { checkRound } from '../../constant'


export const JobBox = ({ name }) => (
  <div className='jobBox'>
    <div className='itemCenter jobIcon'>
      <img src={checkRound} alt={checkRound} />
    </div>
    <p className='jobTitle'>{name}</p>
  </div>
)