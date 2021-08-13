import React from 'react'
import Plot from 'react-plotly.js'
import { dataNonGeo } from '../utils/MockData'

const BarChart = ({ data, xAxisAttribute, yAxisAttribute }) => {
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
    marker: {
      size: 12,
      color: 'rgba(190, 53, 110, 0.5)'
    },
    type: 'bar',
    hovertemplate:
      '<b>Noise Value</b>: %{y}' +
      '<br><b>Day</b>: %{x}<br>' +
      '<extra></extra>'
  }
  //accessibility
  var data = [datapoints]

  let layout = {
    xaxis: { showgrid: false },
    yaxis: { showgrid: false },
    title: 'Scatter Plot of Noise Level data',
    hoverlabel: { bgcolor: '#FFF' }
  }

  return (
    <>
      <Plot className="" data={data} layout={layout} />
    </>
  )
}

export default BarChart
