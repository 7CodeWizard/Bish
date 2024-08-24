import React from 'react'
import { Link } from 'react-router-dom'

import { bg2, checkRoundPink, iphone2 } from '../../constant'
import { Button } from '@mui/material'

const checkInfo = [
  `Get your home's 2024 BISH! code to unlock a huge saving on plumbers and more`,
  `Use it once a year or upgrade for unlimited tradespeople bookings`,
  `Local and reliable tradespeople so you can book with confidence`
]

export const JobTime = () => (
  <div className='flexWrap'>
    <div className="section itemCenter" style={{ position: 'relative' }}>
      <img className="bg2" src={bg2} alt="bg1" />
      <img className="iphone iphoneMargin" src={iphone2} alt="iphone" />
    </div>
    <div className="section itemCenter">
      <div className="heroBox1">
        <p className="heroTitle">Need a plumber? Stop the search. BISH! has arrived</p>
        <p className="aboutDescription" style={{ color: `var(--primary-bgColor)`, fontWeight: '900' }}>Join the $1 million savings challenge by using your home's BISH! code to save BIG on your next tradesperson.</p>
        <div>
          {checkInfo.map((title, index) => (
            <div key={index} className="alignCenter">
              <img src={checkRoundPink} alt="checkRound" className="checkImg" />
              <span className="aboutDescription" style={{ margin: '10px', textAlign: 'left', fontWeight: '500' }}>
                {title}
              </span>
            </div>
          ))}
        </div>
        <Link to='/'>
          <Button className="button" variant="contained" style={{ margin: '30px 0' }}>Get my BISH! Price</Button>
        </Link>
      </div>
    </div>
  </div>
)