import React from "react"

import { bg1, iphone, logoMenu } from "../../constant"
import { Container } from "@mui/system"

export const Hero = () => (
  <Container className='container'>
    <div className="hero heroMargin">
      <div className="section" style={{ color: '#272727', paddingBottom: '60px' }}>
        <Container>
          <img className="logoMenu1" src={logoMenu} alt="logoMenu" />
          <p className="heroTitle heroTitleMargin">
            Fed up of high prices? <br />
            Don't fret. BISH! codes have arrived
          </p>
          <p className="aboutDescription">BISH! is on a mission to save homeowners over £1 million. Unlock your home’s BISH! code today and save BIG on plumbers, insurance and more</p>
        </Container>
      </div>
      <div className="section iphoneSquare">
        <Container>
          <img className="bg1" src={bg1} alt="bg1" />
          <img className="iphone iphone1" src={iphone} alt="iphone" />
        </Container>
      </div>
    </div>
  </Container>
)