import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import poster from '../images/poster.png'
import granular from '../images/granular.png'

import './AboutUgsrp.css'

function AboutUgsrp() {
  return (
    <>
      <Header />
      <div className="home-ugsrp">
        <h2 className="header-text-ugsrp">
          About SONYC Undergraduate Summer Research 2021
        </h2>
        <div className="block">
          <p className="full-text">
            <br />
            <br />
            Each summer, members of the Tandon School of Engineering faculty
            open up their labs to allow NYU Tandon, NYU Dual Degree Program in
            Engineering (CAS/Tandon), NYU Abu Dhabi, NYU Shanghai, and select
            non-NYU rising sophomore, junior, and senior undergraduate students
            to complete 10 weeks of hands-on research. <br />
            Students work in the labs with their faculty mentors and other
            mentors on various research topics while also participating in
            seminars presented by distinguished administrative and academic
            personnel. In addition, research presentations and poster sessions
            are held in which students have the opportunity to present their
            research to peoples of all disciplines and backgrounds.
          </p>
          <br />
        </div>
        <br /> <br />
        <div className="block">
          <h4 className="gif-text">
            Undergraduate Summer Research Program Poster{' '}
          </h4>
          <p className="full-text"> </p>
          <br />
          <img src={poster} alt="poster gif" className="gif-img" />
        </div>
        <br /> <br />
        <div className="block">
          <h4 className="gif-text">Why Noise? </h4>
          <p className="full-text">
            Noise pollution is one of the topmost quality of life issues for
            urban residents in the United States. It has been estimated that 9
            out of 10 adults in New York City (NYC) are exposed to excessive
            noise levels, i.e. beyond the limit of what the EPA considers to be
            harmful. When applied to U.S. cities of more than 4 million
            inhabitants, such estimates extend to over 72 million urban
            residents. The objectives of SONYC are to create technological
            solutions for: (1) the systematic, constant monitoring of noise
            pollution at city scale; (2) the accurate description of acoustic
            environments in terms of its composing sources; (3) broadening
            citizen participation in noise reporting and mitigation; and (4)
            enabling city agencies to take effective, information-driven action
            for noise mitigation.
          </p>
          <br />
        </div>
        <br /> <br />
        <br />
      </div>
      <Footer />
    </>
  )
}

export default AboutUgsrp
