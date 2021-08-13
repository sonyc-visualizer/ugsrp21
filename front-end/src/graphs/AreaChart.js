import React from 'react'
import Plot from 'react-plotly.js'
import { dataNonGeo } from '../utils/MockData'

const AreaChart = ({ data, xAxisAttribute, yAxisAttribute }) => {
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

  var datapoints1 = {
    x: xData,
    y: yData,
    marker: {
      size: 12,
      color: 'rgb(45, 70, 207)'
    },
    fill: 'tozeroy',
    type: 'scatter',

    hovertemplate:
      '<b>Noise Value</b>: %{y}' +
      '<br><b>Day</b>: %{x}<br>' +
      '<extra></extra>'
  }

  var datapoints2 = {
    x: xData,
    y: yData,
    marker: {
      size: 12,
      color: 'rgb(222, 213, 115)'
    },
    fill: 'tonexty',

    type: 'scatter',
    hovertemplate:
      '<b>Noise Value</b>: %{y}' +
      '<br><b>Day</b>: %{x}<br>' +
      '<extra></extra>'
  }
  //accessibility
  var data = [datapoints1, datapoints2]

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
    xaxis: { showgrid: true },
    yaxis: { showgrid: true },
    line: {
      width: 0
    },
    title: 'Scatter Plot of Noise Level data',
    hoverlabel: { bgcolor: '#FFF' }
  }

  return (
    <>
      <Plot className="" data={data} layout={layout} />
    </>
  )
}

export default AreaChart
