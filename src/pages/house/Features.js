import React from "react"
import { Container } from "@mui/system"
import { house, sms1, user } from "../../constant"
import { FeatureBox } from "../../components/box/FeatureBox"

const featuresInfo = [
  {
    icon: house,
    title: 'Enter your postcode to check BISH! codes are available where you live'
  },
  {
    icon: user,
    title: 'If BISH! codes are available then tell us your details'
  },
  {
    icon: sms1,
    title: `We'll send your home's BISH by SMS`
  }
]

export const Features = () => (
  <div className="features featureMargin">
    <div className="featureTitle">How to get your home’s BISH! code</div>
    <div className="featureItems">
      {featuresInfo.map((item, index) => (
        <FeatureBox key={index} item={item} />
      ))}
    </div>
  </div>
)