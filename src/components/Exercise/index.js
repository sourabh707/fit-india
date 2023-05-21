import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import './index.css'
function Exercise() {
  return (
    <div className='Exercise-Container content'>
      <div className="mb-3 ">
        <label for="exampleFormControlInput1 text-start" className=" form-label mb-3"><h1>Body part Name</h1></label>
        <input type="text" className="form-control" placeholder="Enter body part name"/>
      </div>
    </div>
  )
}

export default Exercise;