import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import DropdownMenu from './DropdownMenu'

function Selector() {
  const labelDS = 'Select a Dataset'
  const [database, setDS] = useState('')
  const datasetNames = ['Air Quality Dataset', 'Noise Quality Dataset']
  let display = true
  const handleSubmit = (e) => {
    e.preventDefault()
    const graphObject = { database }
    console.log(graphObject)
  }

  return (
    <>
      <div className="Menu">
        <form onSubmit={handleSubmit}>
          <DropdownMenu
            selected={database}
            setSelected={setDS}
            label={labelDS}
            options={datasetNames}
          />
          <br />
          {display ? <p>Selected Dataset is {database}</p> : ''}
          <br />

          <br />
          <button className="btn">Select</button>
        </form>
      </div>
    </>
  )
}

export default Selector
