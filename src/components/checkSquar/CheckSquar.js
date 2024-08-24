import React from 'react'
import { checkRound } from '../../constant'

export const CheckSquare = ({ name }) => (
  <div className="alignCenter checkSquare">
    <img src={checkRound} alt="checkRound" className="checkImg" />
    <span className="checkTitle">
      {name}
    </span>
  </div>
)