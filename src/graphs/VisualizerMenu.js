import React from 'react'
//Important! Below the mock data is imported from the utils folder
import { dataGeo } from '../utils/MockData.js'
import { dataAQ } from '../utils/MockDataAq.js'
import Header from '../components/Header'
import Footer from '../components/Footer'
import airQ from '../images/airQmenu.png'
import noiseQ from '../images/noiseQmenu.gif'
import './VisualizerMenu.css'
import { useState } from 'react'

//Main component that displays your created graph
//Components in React can be in the form of functions, classes etc.
//and consist of both javascript code and html code (html is the return value)
function VisualizerMenu() {
  const [dataset, setDataset] = useState('')

  //Below is the html code (return value)
  return (
    <>
      <Header />
      <div className="home-graphs">
        <h2 className="header-text">SONYC Visualizer App</h2>
        <p>Please select the dataset you would like to visualize</p>
        <div className="graph-wrapper">
          <div className="wrap-img1">
            <img src={airQ} alt="diagram gif" />
          </div>
          <div className="wrap-img2">
            <img src={noiseQ} alt="diagram gif" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default VisualizerMenu
