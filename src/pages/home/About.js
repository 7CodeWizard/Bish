import { Container } from "@mui/system"
import React from "react"
import { CheckSquare } from "../../components/checkSquar/CheckSquar"


const checkInfo = [
  'Block Toilets Sinks, Pipes and Drains', 'Hot Water Problems', 'Burst Pipes', 'Overflows', 'Floods', 'And more'
]

export const About = () => (
  <div className="about">
    <Container>
      <div>
        <p className="aboutTitle">Use your BISH! Code on big jobs and small jobs</p>
        <p className="aboutDescription">Whether it’s a shower fix or big boiler job your home’s BISH! code will save your money.</p>
        <div className="flexWrap" style={{ justifyContent: 'space-between' }}>
          {checkInfo.map((name, index) => (
            <CheckSquare name={name} key={index} />
          ))}
        </div>
      </div>

    </Container>
  </div>
)