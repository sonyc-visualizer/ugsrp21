import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import poster from '../images/poster.png'
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
            Taking aim at New Yorkers’ biggest civic complaint – noise – a team
            of scientists from NYU, working with collaborators at Ohio State
            University, have launched a first-of-its-kind comprehensive research
            initiative to understand and address noise pollution in New York and
            beyond. The SONYC project – which involves large-scale noise
            monitoring – leverages the latest in machine learning technology,
            big data analysis, and citizen science reporting to more effectively
            monitor, analyze, and mitigate urban noise pollution. Known as
            Sounds of New York City (SONYC), this multi-year project has
            received a $4.6 million grant from the National Science Foundation
            and has the support of City health and environmental agencies. Lean
            more here.
          </p>
          <br />
        </div>
        <br /> <br />
        <div className="block">
          <h4 className="gif-text">
            Undergraduate Summer Research Program 2021{' '}
          </h4>
          <p className="full-text">
            {' '}
            We plan to achieve these objectives by implementing SONYC (Sounds of
            New York City), the novel cyber-physical system depicted above. This
          </p>
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
