import React from "react"

import { bg1, iphone, location, logoMenu } from "../../constant"
import { Container } from "@mui/system"
import { Link } from "react-router-dom"
import { Button } from "@mui/material"

export const Hero = () => (
  <Container className='container'>
    <div className="hero">
      <div className="section">
        <Container>
          <img className="logoMenu" src={logoMenu} alt="logoMenu" />
          <div className="heroBox">
            <p className="heroTitle">Plumber prices are crazy. your home’s BISH! code fixes that</p>
            <p className="aboutDescription">We got fed up of crazy plumbing quotes and now we'e on a mission to save homeowners over £1 million on plumbing jobs and more. Get your home's BISH! code to join the challenge.</p>
          </div>
          <div className="heroCard">
            <span>Get your home’s 2024 BISH! code by SMS and save BIG on your next tradesperson</span> <br />
            <div className="postCode">
              <i><img src={location} alt='location' style={{ height: '20px' }} /> &nbsp;</i>
              <input placeholder="Enter your postcode to start" />
            </div>
          </div>
          <div className="sectionText">Need a tradesperson and already got your home’s BISH! code? Great! Get your home’s exclusive BISH! price now.</div>
          <Link to='./house'>
            <Button className="button" variant="contained">Get my BISH! Price</Button>
          </Link>
        </Container>
      </div>
      <div className="section iphoneSquare">
        <img className="bg1" src={bg1} alt="bg1" />
        <Container>
          <img className="iphone" src={iphone} alt="iphone" />
        </Container>
      </div>
    </div>
  </Container>
)