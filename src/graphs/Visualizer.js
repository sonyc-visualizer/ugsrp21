import React from 'react'
//Important! Below the mock data is imported from the utils folder
import { dataGeo } from '../utils/MockData.js'
import { dataAQ } from '../utils/MockDataAq.js'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Selector from '../components/Selector'
import Histogram from './Histogram'
import BarChart from './BarChart'
import BoxPlot from './BoxPlot'
import Correlation from './Correlation'
import AreaChart from './AreaChart'
import HeatMap from './HeatMap'
import LineGraph from './LineGraph'
import ScatterPlot from './ScatterPlot'
import './Visualizer.css'
import DropdownMenu from '../components/DropdownMenu'

import { useState } from 'react'

//Main component that displays your created graph
//Components in React can be in the form of functions, classes etc.
//and consist of both javascript code and html code (html is the return value)
function Visualizer() {
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
  const dataKeysAq = Object.keys(dataAQ[0])
  const [histoXAttr, setHistoXAttr] = useState('ID')
  let dataKey = Object.keys(dataAQ[0])
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
          <form onSubmit={handleSubmit}>
            <DropdownMenu
              selected={database}
              setSelected={setDS}
              label={labelDS}
              options={datasetNames}
            />
            <br />

            {database == 'Air Quality Dataset'
              ? (dataKey = Object.keys(dataAQ[0]))
              : (dataKey = Object.keys(dataGeo[0]))}
            <br />
            <br />
            <button className="btn">Select</button>
          </form>
          <div className="graph-block">
            <p>Histogram</p>
            <Histogram
              data={dataAQ}
              xAxisAttribute={histoXAttr}
              //title={`People from Different ${histoXAttr}`}
              title={`Histogram Distribution of Air Quality data`}></Histogram>

            <div>
              <div>X Axis</div>
              <div>
                <select onChange={(e) => setHistoXAttr(e.target.value)}>
                  {dataKey.map((key) => (
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
              yAxisAttribute={ScatoYAttr}></ScatterPlot>
            <div className="wrap-axis">
              <div className="x-axis">
                <div>X Axis</div>
                <div>
                  <select onChange={(e) => setScatoXAttr(e.target.value)}>
                    {dataKey.map((key) => (
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
                    {dataKey.map((key) => (
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
              yAxisAttribute={boxPlotYAttr}></BoxPlot>
            <div className="wrap-axis">
              <div className="x-axis">
                <div>X Axis</div>
                <div>
                  <select onChange={(e) => setBoxPlotXAttr(e.target.value)}>
                    {dataKey.map((key) => (
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
                    {dataKey.map((key) => (
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
              yAxisAttribute={lineGraphYAttr}></LineGraph>
            <div className="wrap-axis">
              <div className="x-axis">
                <div>X Axis</div>
                <div>
                  <select onChange={(e) => setlineGraphXAttr(e.target.value)}>
                    {dataKey.map((key) => (
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
                    {dataKey.map((key) => (
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
              yAxisAttribute={barChartYAttr}></BarChart>
            <div className="wrap-axis">
              <div className="x-axis">
                <div>X Axis</div>
                <div>
                  <select onChange={(e) => setBarChartXAttr(e.target.value)}>
                    {dataKey.map((key) => (
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
                    {dataKey.map((key) => (
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
              yAxisAttribute={areaChartYAttr}></AreaChart>
            <div className="wrap-axis">
              <div className="x-axis">
                <div>X Axis</div>
                <div>
                  <select onChange={(e) => setAreaChartXAttr(e.target.value)}>
                    {dataKey.map((key) => (
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
                    {dataKey.map((key) => (
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

export default Visualizer
