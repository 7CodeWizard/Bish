import React from "react"

import './home.css'
import { Hero } from "./Hero"
import { About } from "./About"
import { Features } from "./Features"
import { JobTime } from "./JobTime"
import { Requirements } from "./Requirements"
import { Faq } from "./Faq"

const Home = () => {
  return (
    <>
      <div className="home">
        <Hero />
        <About />
        <Features />
        <JobTime />
        <Requirements />
        <Faq />
      </div>
    </>
  )
}

export default Home