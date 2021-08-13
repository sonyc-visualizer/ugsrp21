import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import lit1 from '../images/lit1.png'
import lit2 from '../images/lit2.png'
import lit3 from '../images/lit3.png'
import lit4 from '../images/lit4.png'
import lit5 from '../images/lit5.png'

import './DataVisualization.css'
import Collapsible from 'react-collapsible'

function DataVisualization() {
  return (
    <>
      <Header />
      <div className="home">
        <h2 className="header-text">Data Visualization</h2>
        <div className="block">
          <p className="full-text">
            <br />
            <br />
            Sensors are used to measure air and noise pollution levels and
            visualizing the data is the first step in making decisions about the
            data.
          </p>
          <br />
        </div>
        <br /> <br />
        <div className="block">
          <h4 className="gif-text">Data Visualization Research Review</h4>

          <div>
            <p className="full-text">
              <b>
                {' '}
                Guess the Data: Data Work to Understand How People Make Sense of
                and Use Simple Sensor Data from Homes .Albrecht Kurze, Andreas
                Bischof, Sören Totzauer, Michael Storz, Maximilian Eibl, Margot
                Brereton, and Arne Berger. 2020.
              </b>
              <i>
                Proceedings of the 2020 CHI Conference on Human Factors in
                Computing Systems
              </i>
              . Association for Computing Machinery, New York, NY, USA, 1–12.
              DOI:https://doi.org/10.1145/3313831.3376273
            </p>
            <Collapsible trigger="Read More" className="full-text">
              <p className="full-text">
                The authors investigate human sensemaking of such sensor data
                can reveal domestic activities and to achieve that task, develop
                and field-test the Guess the data method,which enabled people to
                use and make sense of live data from their homes and to
                collectively interpret and reflect on anonymized data from the
                homes in the study. The authors decided to use simple line
                graphs as data visualizations for temperature, light level,
                humidity, barometric pressure and movement (accelerometer
                values). They wanted to undertake very little pre-processing,
                presenting close to ‘raw’ data, to prevent interpretation bias.
                Such simple time series graphs are comparable to those used in
                other cited studies. The findings show how participants
                reconstruct behavior, both individually and collectively, expose
                the sensitive personal data of others, and use sensor data as
                evidence and for lateral surveillance within the household.
                <br />
                Visualized sensor data used as evidence and proof: Participants
                used visualized data to confirm their assumptions about other
                residents’ behavior, not only retrospectively during discussions
                but also pro-actively during data collection when they had
                access to it. For example, a participant corrected the partner’s
                careless behavior regarding the light in the hallway (figure 3),
                which he often forgot to turn off. She confronted him with the
                visualization of the light sensor data, and “he was a little bit
                shocked” (II.A)
              </p>
              <img src={lit1} alt="poster gif" className="vis-img" />
            </Collapsible>
            <br />
          </div>

          <div>
            <p className="full-text">
              <b>
                Nicolas Maisonneuve, Matthias Stevens, Maria E. Niessen, Peter
                Hanappe, and Luc Steels. 2009. Citizen noise pollution
                monitoring.
              </b>
              In{' '}
              <i>
                Proceedings of the 10th Annual International Conference on
                Digital Government Research: Social Networks: Making Connections
                between Citizens, Data and Government
              </i>{' '}
              (<i>dg.o '09</i>). Digital Government Society of North America,
              96–103. https://dl.acm.org/doi/10.5555/1556176.1556198
            </p>
            <Collapsible trigger="Read More" className="full-text">
              <p className="full-text">
                In this paper, authors present a new approach to monitor noise
                pollution involving citizens who can measure their personal
                exposure to noise in their everyday environment by using
                GPS-equipped mobile phones as noise sensors. The geo-localised
                measures and user-generated meta-data can be automatically sent
                and shared online with the public to contribute to the
                collective noise mapping of cities. The prototype called Noise
                Tube can be found online. This application collects local
                information from different sensors (noise level, GPS
                coordinates, time, user input) and sends them to the NoiseTube
                server which visualizes the noise level data. The server
                centralises and processes the data sent by the phones.
                <br />
                <br />
                The mobile application contains a real-time signal processing
                algorithm which measures the loudness level of the microphone
                recording the environmental sound (at 22500 Hz, 16 bits) over 1
                second at a chosen interval. On top of the sensing of the
                loudness a real time visualization is displayed on the phone
                with the decibels. To add meaning to this value it is associated
                with a colour that represents the health risk of the current
                exposure level: less than 70: green (no risk); between 70 and
                80: yellow (be careful); more than 80: red (risky). See figure 2
                below.
                <br />
                <br />
                <img src={lit2} alt="poster gif" className="vis-img" />
                <br />
                In addition to measured loudness, the app allows to record the
                source or context of noise, which is not always available but
                remains important. Especially because the appreciation of sound
                and loudness is a subjective matter – i.e. the perceived
                annoyance (or pleasure) does not always correlate with its
                loudness (see 6.2). Context is recorded through environmental
                tagging (source of a noise e.g.: cars, aircraft, neighbours and
                an annoyance rating/tag) and geo-tagging (gps positioning or
                place tags (such as “home”, “work”, the name of the subway
                station, ...) Geo-tagging feature we can reconstruct the
                geo-coordinates afterwards notably for indoor locations (cf.
                subway noise map in figure 3).
                <br />
                <img src={lit3} alt="poster gif" className="vis-img" />
                <br />
                <br />
                Visualising Noise Maps. Once the measured data is sent to the
                server, any user can see his own contributions or exposures by
                going to the NoiseTube website and visualizing them on a map
                thanks to Google Earth. The collective noise map is also
                publicly available constructed by aggregating all the shared
                participants. Each map can show a layer of participants to add
                context and meaning to the loudness data. The authors also allow
                users embed this as a web widget into their personal web pages
                and provide publicly accessible web API to give full access to
                third parties such scientists or developers can use individual
                or collective exposure data to create web mash-ups or analyse
                data for scientific purposes.
              </p>
            </Collapsible>
            <br />
          </div>
          <div>
            <p className="full-text">
              <b>
                Silvia Santini, Benedikt Ostermaier, and Andrea Vitaletti. 2008.
                First experiences using wireless sensor networks for noise
                pollution monitoring.{' '}
              </b>
              In{' '}
              <i>
                Proceedings of the workshop on Real-world wireless sensor
                networks
              </i>{' '}
              (<i>REALWSN '08</i>). Association for Computing Machinery, New
              York, NY, USA, 61–65. DOI:https://doi.org/10.1145/1435473.1435490
            </p>
            <Collapsible trigger="Read More" className="full-text">
              <p className="full-text">
                The authors focus on the assessment of environmental noise
                pollution in urban areas and provide a feasibility analysis of
                wireless sensor networks. They also present a prototype for the
                collection and logging of noise pollution data based on the
                Tmote invent prototyping platform, using which they performed
                indoor and outdoor noise pollution measurements. They also
                present tinyLAB, a Matlab-based tool developed in the context of
                this work, which enables real-time acquisition, processing and
                visualization of data collected in wireless sensor networks.
                Authors mention that prototyping wireless sensor network
                applications often requires visualizing the sensor data to
                quickly identify any malfunctioning. For example, figure 1 shows
                the responses to these acoustic events of four different nodes,
                clearly pointing out a misalignment in the measured equivalent
                noise levels. <br />
                <br />
                <img src={lit4} alt="poster gif" className="vis-img" />
                <br />
                <br />
                Additionally, authors mention that current tools often do not
                provide satisfactory data processing and visualization features
                and propose using Matlab as it serves scientists in managing,
                processing and visualizing their data and appears therefore
                particularly well-suited to be used in the context of wireless
                sensor networks. Authors develop tinyLAB, a simple framework
                that allows to receive and send messages from and to a sensor
                network and to visualize and process data as it comes from the
                network. tinyLAB is implemented relying solely on the Matlab
                software suite and offers a simple API to receive and send data.
              </p>
            </Collapsible>
            <br />
          </div>
          <div>
            <p className="full-text">
              <b>
                Ann-sofie Gunnarsson, Malinda Rauhala, Anders Henrysson, and
                Anders Ynnerman. 2006. Visualization of sensor data using mobile
                phone augmented reality.{' '}
              </b>
              In{' '}
              <i>
                Proceedings of the 5th IEEE and ACM International Symposium on
                Mixed and Augmented Reality
              </i>{' '}
              (<i>ISMAR '06</i>). IEEE Computer Society, USA, 233–234.
              DOI:https://doi.org/10.1109/ISMAR.2006.297820
            </p>
            <Collapsible trigger="Read More" className="full-text">
              <p className="full-text">
                The authors developed a prototype system for visual inspection
                of hidden structures using a mobile phone wireless ZigBee sensor
                network. Data collected from an embedded wireless sensor matrix
                is used to synthesize AR visualizations in real-time. The AR
                visualization is providing the user with an instant insight
                concerning the status of the element being augmented. The
                authors arrange sensors in a grid (e.g. a matrix), which allows
                to take an approach where individual sensors emerge as pixels in
                an image when their data is translated into color values. See
                below an image that shows a mobile application overview.
                <br />
                <img src={lit5} alt="poster gif" className="vis-img" />
                <br /> <br />
                Authors argue that AR is an ideal way to present such context
                related visualizations since it eliminates the focus switching
                between the visualization domain (image) and problem domain
                (real world). The sensors measure the relative humidity (RH) at
                the location of the sensor, providing with data from a discrete
                set of measure points in 3D. The values between the measure
                points are interpolated creating a continuous visualization
                which provides the user an overview of the humidity values as
                well as their distribution. The mobile phone application
                contains a visualization engine and a communication layer. The
                interpolation is performed in real time and every time a new
                sensor value is retrieved from the sensor network the
                visualization is updated. Two visualization options are
                implemented, one fully continuous, see Figure below, while the
                other is composed of small quadratic units, separated using full
                transparency. Authors believe that the user experiences a better
                sense of orientation when less background information is covered
                by the visualization.
                <br />
              </p>
            </Collapsible>
            <br />
          </div>
        </div>
        <br /> <br />
        <div className="block">
          <h4 className="gif-text">Sensor Data Visualization Challenges </h4>
          <p className="full-text">
            Visualizing large amounts of temporal data requires balancing the
            goals of achieving high performance and interactivity. One solution
            lies in intelligently aggregating the data to higher granularities,
            so that the number of data points to be visualized is reduced and is
            easier for the user to interpret. Insert image below.
            <br />
            <br />
            Moreover, visualizing the longitudinal data such as noise or air
            pollution data is challenging due to continuity of the data (no
            precise start and end). For example, Many line or bar charts that
            deal with the 24-hour cycle simply pick a point at which the chart
            starts and ends. Sometimes the charts go from 12am-12am, sometimes
            they use ranges like 4am-4am (which puts the break during a time
            when most people are sleeping). For specific data this is often
            acceptable, but in general it is a limitation (How can you pick an
            arbitrary time to break the data? How are you sure the most
            interesting part of the data doesn’t overlap when the chart begins
            and ends?)
          </p>
          <br />
        </div>
        <br /> <br />
        <div className="block">
          <h4 className="gif-text">Visualization Graphs and Discussion </h4>
          <h6 className="gif-text-h6">Line Chart </h6>
          <p className="full-text"></p>
          <br />
        </div>
        <br />
      </div>
      <Footer />
    </>
  )
}

export default DataVisualization
