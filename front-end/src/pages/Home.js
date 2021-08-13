import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import diagram from '../images/sonyc-inverted-diagram.png'
import './Home.css'

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <h2 className="header-text">About SONYC </h2>
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
          <h4 className="gif-text">The SONYC Cyber-Physical System </h4>
          <p className="full-text">
            {' '}
            We plan to achieve these objectives by implementing SONYC (Sounds of
            New York City), the novel cyber-physical system depicted above. This
            system includes a hybrid, distributed network of sensors and
            citizens for large-scale noise reporting. In this network, citizens
            are empowered by apps that help them connect to the city and each
            other in an effective and responsive manner, while sensors make use
            of cutting-edge machine listening methods to constantly provide a
            rich description of their acoustic environment. Information from the
            network flows through a cyber-infrastructure that analyzes,
            retrieves and visualizes data to facilitate the identification of
            important patterns of noise pollution: a noise “mission control”
            center of sorts, intended for decision-makers at city agencies to
            strategically deploy the human resources at their disposal to act on
            the physical world. There are significant challenges in executing
            this agenda, which is why our team includes experts in acoustics,
            machine listening, distributed networking, citizen science, digital
            media, machine learning, data analysis and visualization.{' '}
          </p>
          <br />
          <img src={diagram} alt="diagram gif" className="gif-img" />
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

export default Home
