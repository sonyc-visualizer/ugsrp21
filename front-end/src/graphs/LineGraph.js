import React from 'react'
import Plot from 'react-plotly.js'
import { dataNonGeo } from '../utils/MockData'

const LineGraph = ({ data, xAxisAttribute, yAxisAttribute }) => {
  let xData = data.map((d) => {
    if (d[xAxisAttribute] === undefined || d[xAxisAttribute] === 'NULL') {
      return ''
    }
    return d[xAxisAttribute]
  })

  let yData = data.map((d) => {
    if (d[yAxisAttribute] === undefined || d[yAxisAttribute] === 'NULL') {
      return ''
    }
    return d[yAxisAttribute]
  })

  var datapoints = {
    x: xData,
    y: yData,
    mode: 'lines',
    text: [],
    marker: {
      size: 12,
      color: 'rgb(56, 176, 88)'
    },
    type: 'scatter',
    hovertemplate:
      '<b>Noise Value</b>: %{y}' +
      '<br><b>Day</b>: %{x}<br>' +
      '<extra></extra>'
  }
  //accessibility
  var data = [datapoints]

  let layout = {
    margin: {
      pad: 5
    },
    transition: {
      duration: 500,
      easing: 'cubic'
    },
    frame: {
      duration: 500
    },
    xaxis: { showgrid: false },
    yaxis: { showgrid: false },
    line: {
      width: 0
    },
    title: 'Line Graph of Noise Level data',
    hoverlabel: { bgcolor: '#FFF' }
  }

  return (
    <>
      <Plot className="" data={data} layout={layout} />
    </>
  )
}

export default LineGraph
