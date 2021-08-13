import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import poster from '../images/poster.png'
import './DataCollection.css'

function DataCollection() {
  return (
    <>
      <Header />
      <div className="home-ugsrp">
        <h2 className="header-text-ugsrp">
          Sensor Data Collection and Analysis
        </h2>
        <div className="block">
          <p className="full-text">
            <br />
            <br />
            SONYC Air Quality (sonycAQ) Page to preview the code and related
            docs for the air quality (AQ) aspects of the{' '}
            <a href="https://wp.nyu.edu/sonyc">
              Sounds Of New York City Project
            </a>
            . The AQ sensor chosen is the{' '}
            <a href="https://www.pierasystems.com/products/piera-7100-intelligent-particle-sensor">
              Piera IPS-7100 Intelligent Particle Sensor{' '}
            </a>
            which communiactes via UART with the SONYC project's Raspberry Pi 4B
            based noise sensor.
            <br /> <br />
            <img
              src={
                'https://user-images.githubusercontent.com/86373439/128935455-52568d5b-1691-46e3-8aee-3af3ae30c94b.png'
              }
              alt="poster gif"
              className="sensor-img"
            />
          </p>
          <br />
        </div>
        <br /> <br />
        <div className="block">
          <h4 className="gif-text">Introduction - Why is AQ part of SONYC?</h4>
          <p className="full-text">
            {' '}
            Air pollutants, including particulate matter (PM's), particularly
            PM2.5, are a significant health concern in urban areas such as New
            York City. The NYC Department of Health estimates approximately
            3,000 people die each year due to PM2.5-related illnesses in the
            city, and approximately 8,000 more hospital visits can be linked to
            dangerous PM2.5 exposure.
            <a href="https://www1.nyc.gov/assets/doh/downloads/pdf/eode/eode-air-quality-impact.pdf">
              Maps
            </a>
            from a study by the Department of Health show that the distribution
            of PM2.5-related medical incidents is not even across neighborhoods,
            and is elevated with higher poverty rates. This shows that
            particulate matter air pollution is a community-based problem, that
            may have a community-based solution. The following tables from the
            aforementioned{' '}
            <a href="https://www1.nyc.gov/assets/doh/downloads/pdf/eode/eode-air-quality-impact.pdf">
              Department of Health
            </a>
            illustrate the danger of NYC PM2.5 concentrations and showcase the
            exacerbated risk to communities with high poverty rates. Further
            figures are available at the source.
            <br />
            <br />
            <img
              src={
                'https://user-images.githubusercontent.com/86373439/128933800-203ed878-9706-475b-8545-4675aa4cc693.png'
              }
              alt="poster gif"
              className="sensor-img"
            />
            <img
              src={
                'https://user-images.githubusercontent.com/86373439/128934092-9049ec9c-7452-40d1-ad3f-a3150b4776e7.png'
              }
              alt="poster gif"
              className="sensor-img"
            />
            Images courtesy of the NYC Department of Health and Mental Hygiene.
            <br />
            <br />
            SONYC has spent years working with citizen-science based approaches
            to the issue of noise pollution in New York City, and we are now
            capable of expanding that infrastructure to examine air pollution.
            The availablility of reasonably-priced and scalable devices such as
            the IPS-7100 will allow us to eventually create a wide network of
            citizen-based collectors of air pollutant levels and air quality in
            New York City neighborhoods.
            <br />
            <br />
            We are particularly interested in examining air pollution due to the
            potential correlation between it and noise pollution. Some research
            into this correlation has been done, but neither in NYC residential
            settings, nor through a citizen-based initiative. SONYC is in a
            unique position to leverage existing sound-collecting apparatus and
            community relationships towards examining this correlation. More
            data regarding this correlation may lead to better understandings of
            links between air or noise pollution and certain health conditions,
            and can help city agencies and community groups to better devote
            resources to neighborhoods with pollution problems. <br />
            <br />
            Additionally, SONYC's existing app for delivering sound data to
            residents in real time and requesting their qualitative analysis of
            sound quality can be modified to perform the same functions with air
            quality. AQ data processed by the new code can be delivered into the
            app and presented in real time, in a manner suitable for a
            non-specialist audience. It can also be used as a means for
            collecting qualitative data, allowing us to link quantitative
            analysis with qualitative feedback.
          </p>
          <br />
        </div>
        <br /> <br />
        <div className="block">
          <h4 className="gif-text">Data Formatting Information </h4>
          <h5 className="gif-text-h5">Output String Information </h5>
          <p className="full-text">
            Output information from the IPS is delivered to the Pi as a string.
            This string contains the particle count and particle mass for the
            particle sizes measured by the sensor (PM0.1, PM0.3, PM0.5, PM1.0,
            PM2.5, PM5.0, and PM10) in the units the sensor is set to. Under
            default settings, the count is measured in # of particles per liter
            (#/L), and the mass in micrograms per cubic meter (ug/m^3). Also
            under default settings, the string terminates with the sensor's
            serial number and network key.
            <br />
          </p>
          <h5 className="gif-text-h5">Example Unformatted Output String</h5>

          <p className="full-text">
            <code>
              PC0.1,###,PC0.3,###,PC0.5,###,PC1.0,###,PC2.5,###,PC5.0,###,PC10,###,PM0.1,
              #.####,PM0.3, #.####,PM0.5, #.####,PM1.0, #.####,PM2.5,
              #.####,PM5.0, #.####,PM10, #.####,IPS-S-#########,abcdefg######=
            </code>
          </p>
          <h5 className="gif-text-h5">CSV File Format</h5>

          <p className="full-text">
            CSV files are generated once every minute, and a reading is taken
            every second, corresponding to a new row in the current file. Each
            CSV file is named with the following format:
            <code>sonycnode-xxxxxxxxxxxx-pm-YYYY_MM_DD-HH_MM_SS.csv</code>. The
            first line in each file is a header, and all subsequent lines
            represent one of the measurements, with the first column as the
            timestamp (in seconds since the beginning of the epoch), and the
            subsequent columns representing PC0.1 - PC10, and PM0.1 - PM10.
          </p>
          <h5 className="gif-text-h5">CSV File Header</h5>
          <p className="full-text">
            <code>
              datetime,PC0.1,PC0.3,PC0.5,PC1.0,PC2.5,PC5.0,PC10,PM0.1,PM0.3,PM0.5,PM1.0,PM2.5,PM5.0,PM10
            </code>
          </p>
          <br />
        </div>
        <div className="block">
          <h4 className="gif-text">Previous Development Stages (Completed) </h4>

          <p className="full-text">
            1. Wire up sensor to Raspberry Pi via UART and create Python script
            to read its output <br />
            <br />
            2. Parse output string and write to CSV file with a measurment per
            second <br />
            <br />
            3. Create a new CSV file every minute with each containing a header
            row and a minutes worth of measurements - each file should be named
            with the following format:
            <br />
            <br />
            <code>sonycnode-xxxxxxxxxxxx-pm-YYYY_MM_DD-HH_MM_SS.csv</code>{' '}
            <br />
            <br />
            4. Collect a few days worth of continuous data from the sensor
            nearby an open window <br />
            <br />
            5. Create a Jupyter Notebook in this repository and plot the data
            using matplotlib
          </p>
        </div>
        <br /> <br />
        <br />
      </div>
      <Footer />
    </>
  )
}

export default DataCollection
