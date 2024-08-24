import React from "react"
import { Container } from "@mui/system"
import { book, locationWhite, sms } from "../../constant"
import { FeatureBox } from "../../components/box/FeatureBox"

const featuresInfo = [
  {
    icon: locationWhite,
    title: 'Find your Address'
  },
  {
    icon: book,
    title: 'Get  Your Home’s BISH! by SMS'
  },
  {
    icon: sms,
    title: 'Book your plumber and get your 2024 BISH!'
  }
]

export const Features = () => (
  <div className="features">
    <Container>
      <p className="aboutTitle">How to get your home’s BISH! code</p>
      <div className="featureItems">
        {featuresInfo.map((item, index) => (
          <FeatureBox key={index} item={item} />
        ))}
      </div>
    </Container>
  </div>
)