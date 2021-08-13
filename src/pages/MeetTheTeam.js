import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './MeetTheTeam.css'
import image from '../images/stock-user-white.png'

function MeetTheTeam() {
  return (
    <>
      <body id="meet">
        <Header />
        <div className="header">
          <h1 id="team-header">Meet the Team</h1>
        </div>
        <div className="content">
          <img className="github-img" src={image} alt=""></img>
          <h4>Professor Graham Dove</h4>
          <a href="https://www.codesignwithdata.com/">Personal Webpage</a>
          <p>
            Professor Graham Dove is leading the UGSRP SONYC project in Summer
            2021. He is a a human-computer interaction design researcher,
            currently working as Research Assistant Professor at the Center for
            Urban Science and Progress (CUSP), Tandon School of Engineering, New
            York University. Professor Dove's research focuses on user centered
            and participatory approaches to designing data-enabled products,
            services, and artifacts, and human engagement with machine-learning.
          </p>
        </div>
        <div className="content">
          <img className="github-img" src={image} alt=""></img>
          <h4>James Venditto</h4>
          <a href="https://github.com/JVenditto">GitHub</a>
          <p>
            James Venditto is an Electrical Engineering student at University of
            on collecting and analyzing the Air Quality sensor data that power
            the SONYC Visualizer app. Learn more about the data collection and
            analysis process{' '}
            <a href="https://github.com/sonyc-project/sonycAQ">here</a>.
          </p>
        </div>
        <div className="content">
          <img className="github-img" src={image} alt=""></img>
          <h4>Alma Kapan</h4>
          <a href="https://github.com/almazhankapan">GitHub</a>
          <p>
            Alma Kapan is a student at New York University, an UGSRP Summer 2021
            participant, who worked on data visualization research and developed
            the SONYC Visualizer App. You can learn more about data
            visualization research <a href="/datavis">here</a> and view project
            code <a href="https://github.com/almazhankapan/sonyc-app">here</a>.
          </p>
        </div>
        <div className="content">
          <img className="github-img" src={image} alt=""></img>
          <h4>Matahari K Herwin</h4>
          <p>
            Matahari is a student at New York University and an UGSRP 2021
            participant who was actively involved in creating the prototype for
            the Air Quality addendum for the SONYC mobile app (ongoing work).
            You can view app interactions
            <a href="https://www.figma.com/proto/onDa0SkRvfSmo6SJG7Uek5/SONYC_AQ?page-id=94%3A138&node-id=94%3A141&viewport=469%2C406%2C0.8509852290153503&scaling=min-zoom">
              {' '}
              here
            </a>
          </p>
        </div>
        <Footer />
      </body>
    </>
  )
}

export default MeetTheTeam
