import React from 'react'
import { bg2, iphone2 } from '../../constant'
import { JobBox } from '../../components/box/JobBox'
import { Container } from '@mui/system'

const jobTypeInfo = ['Easy to book', 'Local', 'Insured', 'Reliable', 'Experts']

export const JobTime = () => (
  <div>
    <div className='flexWrap'>
      <div className="section itemCenter" style={{ position: 'relative' }}>
        <img className="bg2" src={bg2} alt="bg1" />
        <img className="iphone" src={iphone2} alt="iphone" />
      </div>
      <div className="section itemCenter">
        <div className='jobText'>
          <span className='aboutTitle'>Experts to your door at your home’s exclusive  price for 2024. That’s BISH!</span>
          <p></p>
          <span className='aboutDescription'>Use your home’s BISH! code to save<br /> money on all kinds of plumber jobs</span>
        </div>
      </div>
      <Container>
        <div className='jobTypes'>
          <span className='aboutTitle'>BISH! Tradespeople get the job done</span>
          <div className='flexWrap spaceAround' style={{ marginTop: '44px' }}>
            {jobTypeInfo.map((name, index) => (
              <JobBox key={index} name={name} />
            ))}
          </div>
        </div>
      </Container>
    </div>
    <div className='about' style={{ textAlign: 'center' }}>
      <p className='aboutTitle'>Need a tradesperson? Your home's BISH! code has got your back.</p>
      <p className='aboutDescription' style={{ margin: '0 10%' }}>The next time you need a tradesperson the first price you check should really be your home's 2024 BISH! price. Here's why.</p>
    </div>
  </div >
)