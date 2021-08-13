import React from 'react'
//Important! Below the mock data is imported from the utils folder
import { dataAQ } from '../utils/MockDataAq.js'
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
function VisualizerAQ() {
  const dataKeysAq = Object.keys(dataAQ[0])
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
              data={dataAQ}
              xAxisAttribute={histoXAttr}
              title={`Histogram Distribution of Air Quality data`}
            ></Histogram>

            <div>
              <div>X Axis</div>
              <div>
                <select onChange={(e) => setHistoXAttr(e.target.value)}>
                  {dataKeysAq.map((key) => (
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
              data={dataAQ}
              xAxisAttribute={ScatoXAttr}
              yAxisAttribute={ScatoYAttr}
              title={'Scatter Plot of Air Quality Data'}
            ></ScatterPlot>
            <div className="wrap-axis">
              <div className="x-axis">
                <div>X Axis</div>
                <div>
                  <select onChange={(e) => setScatoXAttr(e.target.value)}>
                    {dataKeysAq.map((key) => (
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
                    {dataKeysAq.map((key) => (
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
              data={dataAQ}
              xAxisAttribute={boxPlotXAttr}
              yAxisAttribute={boxPlotYAttr}
              title={'Box Plot of Air Quality Data'}
            ></BoxPlot>
            <div className="wrap-axis">
              <div className="x-axis">
                <div>X Axis</div>
                <div>
                  <select onChange={(e) => setBoxPlotXAttr(e.target.value)}>
                    {dataKeysAq.map((key) => (
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
                    {dataKeysAq.map((key) => (
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
              data={dataAQ}
              xAxisAttribute={lineGraphXAttr}
              yAxisAttribute={lineGraphYAttr}
              title={'Line Graph Distribution of Air Quality Data'}
            ></LineGraph>
            <div className="wrap-axis">
              <div className="x-axis">
                <div>X Axis</div>
                <div>
                  <select onChange={(e) => setlineGraphXAttr(e.target.value)}>
                    {dataKeysAq.map((key) => (
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
                    {dataKeysAq.map((key) => (
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
              data={dataAQ}
              xAxisAttribute={barChartXAttr}
              yAxisAttribute={barChartYAttr}
              title={'Bar Chart of Air Quality Data'}
            ></BarChart>
            <div className="wrap-axis">
              <div className="x-axis">
                <div>X Axis</div>
                <div>
                  <select onChange={(e) => setBarChartXAttr(e.target.value)}>
                    {dataKeysAq.map((key) => (
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
                    {dataKeysAq.map((key) => (
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
              data={dataAQ}
              xAxisAttribute={areaChartXAttr}
              yAxisAttribute={areaChartYAttr}
              title={'Area Chart of Air Quality Data'}
            ></AreaChart>
            <div className="wrap-axis">
              <div className="x-axis">
                <div>X Axis</div>
                <div>
                  <select onChange={(e) => setAreaChartXAttr(e.target.value)}>
                    {dataKeysAq.map((key) => (
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
                    {dataKeysAq.map((key) => (
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

export default VisualizerAQ
