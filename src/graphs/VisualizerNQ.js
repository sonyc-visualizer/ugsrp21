import React from 'react'
//Important! Below the mock data is imported from the utils folder
import { dataGeo } from '../utils/MockData.js'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Histogram from './Histogram'
import BarChart from './BarChart'
import BoxPlot from './BoxPlot'
import Correlation from './Correlation'
import AreaChart from './AreaChart'
import HeatMap from './HeatMap'
import LineGraph from './LineGraph'
import ScatterPlot from './ScatterPlot'
import './Visualizer.css'

import { useState } from 'react'

//Main component that displays your created graph
//Components in React can be in the form of functions, classes etc.
//and consist of both javascript code and html code (html is the return value)
function VisualizerNQ() {
  const labelDS = 'Select a Dataset'
  const [database, setDS] = useState('')
  const datasetNames = ['Air Quality Dataset', 'Noise Quality Dataset']
  let display = true
  const handleSubmit = (e) => {
    e.preventDefault()
    const graphObject = { database }
    console.log(graphObject)
  }
  const dataKeys = Object.keys(dataGeo[0])
  const [histoXAttr, setHistoXAttr] = useState('ID')
  //scatter plot attributes
  const [ScatoXAttr, setScatoXAttr] = useState('ID')
  const [ScatoYAttr, setScatoYAttr] = useState('ID')

  //box plot attributes
  const [boxPlotXAttr, setBoxPlotXAttr] = useState('ID')
  const [boxPlotYAttr, setBoxPlotYAttr] = useState('Time')

  //line graph attributes
  const [lineGraphXAttr, setlineGraphXAttr] = useState('ID')
  const [lineGraphYAttr, setlineGraphYAttr] = useState('ID')

  //bar chart attributes
  const [barChartXAttr, setBarChartXAttr] = useState('ID')
  const [barChartYAttr, setBarChartYAttr] = useState('ID')

  //area chart attributes
  const [areaChartXAttr, setAreaChartXAttr] = useState('ID')
  const [areaChartYAttr, setAreaChartYAttr] = useState('ID')

  //Below is the html code (return value)
  return (
    <>
      <Header />
      <div className="home-graphs">
        <h2 className="header-text-graphs">SONYC Visualizer App</h2>

        <div className="graph-wrapper">
          <div className="graph-block">
            <p>Histogram</p>
            <Histogram
              data={dataGeo}
              xAxisAttribute={histoXAttr}
              title={`Histogram Distribution of Noise Level data`}
            ></Histogram>

            <div>
              <div>X Axis</div>
              <div>
                <select onChange={(e) => setHistoXAttr(e.target.value)}>
                  {dataKeys.map((key) => (
                    <option key={key} value={key}>
                      {key}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="graph-block">
            <p>Scatter Plot</p>
            <ScatterPlot
              data={dataGeo}
              xAxisAttribute={ScatoXAttr}
              yAxisAttribute={ScatoYAttr}
              title={`Scatter Plot Distribution of Noise Level data`}
            ></ScatterPlot>
            <div className="wrap-axis">
              <div className="x-axis">
                <div>X Axis</div>
                <div>
                  <select onChange={(e) => setScatoXAttr(e.target.value)}>
                    {dataKeys.map((key) => (
                      <option key={key} value={key}>
                        {key}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="y-axis">
                <div>Y Axis</div>
                <div>
                  <select onChange={(e) => setScatoYAttr(e.target.value)}>
                    {dataKeys.map((key) => (
                      <option key={key} value={key}>
                        {key}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="graph-block">
            <p>BoxPlot</p>
            <BoxPlot
              data={dataGeo}
              xAxisAttribute={boxPlotXAttr}
              yAxisAttribute={boxPlotYAttr}
            ></BoxPlot>
            <div className="wrap-axis">
              <div className="x-axis">
                <div>X Axis</div>
                <div>
                  <select onChange={(e) => setBoxPlotXAttr(e.target.value)}>
                    {dataKeys.map((key) => (
                      <option key={key} value={key}>
                        {key}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="y-axis">
                <div>Y Axis</div>
                <div>
                  <select onChange={(e) => setBoxPlotYAttr(e.target.value)}>
                    {dataKeys.map((key) => (
                      <option key={key} value={key}>
                        {key}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="graph-block">
            <p>Line Graph</p>
            <LineGraph
              data={dataGeo}
              xAxisAttribute={lineGraphXAttr}
              yAxisAttribute={lineGraphYAttr}
              title={`Line Graph of Noise Level data`}
            ></LineGraph>
            <div className="wrap-axis">
              <div className="x-axis">
                <div>X Axis</div>
                <div>
                  <select onChange={(e) => setlineGraphXAttr(e.target.value)}>
                    {dataKeys.map((key) => (
                      <option key={key} value={key}>
                        {key}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="y-axis">
                <div>Y Axis</div>
                <div>
                  <select onChange={(e) => setlineGraphYAttr(e.target.value)}>
                    {dataKeys.map((key) => (
                      <option key={key} value={key}>
                        {key}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="graph-block">
            <p>Bar Chart</p>
            <BarChart
              data={dataGeo}
              xAxisAttribute={barChartXAttr}
              yAxisAttribute={barChartYAttr}
              title={`Bar Chart of Noise Level data`}
            ></BarChart>
            <div className="wrap-axis">
              <div className="x-axis">
                <div>X Axis</div>
                <div>
                  <select onChange={(e) => setBarChartXAttr(e.target.value)}>
                    {dataKeys.map((key) => (
                      <option key={key} value={key}>
                        {key}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="y-axis">
                <div>Y Axis</div>
                <div>
                  <select onChange={(e) => setBarChartYAttr(e.target.value)}>
                    {dataKeys.map((key) => (
                      <option key={key} value={key}>
                        {key}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="graph-block">
            <p>Area Chart</p>
            <AreaChart
              data={dataGeo}
              xAxisAttribute={areaChartXAttr}
              yAxisAttribute={areaChartYAttr}
              title={`Area Chart of Noise Level data`}
            ></AreaChart>
            <div className="wrap-axis">
              <div className="x-axis">
                <div>X Axis</div>
                <div>
                  <select onChange={(e) => setAreaChartXAttr(e.target.value)}>
                    {dataKeys.map((key) => (
                      <option key={key} value={key}>
                        {key}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="y-axis">
                <div>Y Axis</div>
                <div>
                  <select onChange={(e) => setAreaChartYAttr(e.target.value)}>
                    {dataKeys.map((key) => (
                      <option key={key} value={key}>
                        {key}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default VisualizerNQ
