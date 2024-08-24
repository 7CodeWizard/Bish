import React from "react"
import { checkRoundPink } from "../../constant"

const cardInfo = [
  {
    title: 'Plumbers at cost ',
    text: `We don't profit from plumbers so you can save BIG on your next plumbing job.`,
  },
  {
    title: 'No mark ups on parts',
    text: `Yep, we don't mark up parts so you can save more.`,
  },
  {
    title: 'Experts only, naturally',
    text: `We only work with the best in your area so you're in safe hands`,
  },
]

export const Requirements = () => (
  <>
    <div className="requirements itemCenter flexWrap">
      <div>
        {cardInfo.map((item, index) => (
          <div key={index} className="requirementCard">
            <span className="aboutTitle">{item.title}</span>
            <p className="aboutDescription" style={{ width: '65%' }}>{item.text}</p>
            <div className="requirementCardIcon itemCenter">
              <img src={checkRoundPink} alt={checkRoundPink} style={{ width: '35px' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className='about' style={{ textAlign: 'center' }}>
      <p className='aboutTitle'>Already got your home`s tradesperson BANG! code?</p>
      <p className='aboutDescription' style={{ margin: '0 10%' }}>Call your local BANG! team now and tell us about the job and we`ll confirm your BANG! price.</p>
      <p className="aboutTitle number">0800 367 3993</p>
    </div>
  </>
)