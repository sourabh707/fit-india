import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';

const Experience = () => {
  return (
    <div className='Experience-container'>
      {/* <h1>Share Your Experience</h1> */}
      <form className="row g-3">
        <h2>Share your Experience</h2>
        <div className="col-md-6 text-start">
          <label className="form-label text-start">First Name</label>
          <input type="text" className="form-control" placeholder='First Name'required />
        </div>
        <div className="col-md-6 text-start">
          <label className="form-label">Last Name</label>
          <input type="text" className="form-control" placeholder='Last Name' required/>
        </div>
        <div className="col-md-9 text-start">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" placeholder='name@example.com' required/>
        </div>
        <div className="col-md-3 text-start">
          <label className="form-label">Height</label>
          <input type="number" className="form-control" placeholder='Height (in cm)' required/>
        </div>
        <div className="col-md-6 text-start">
          <label className="form-label">Staring Height</label>
          <input type="number" className="form-control" placeholder='Weight (in kg)' required/>
        </div>
        <div className="col-md-6 text-start">
          <label className="form-label">Present Weight</label>
          <input type="number" className="form-control" placeholder=' Weight (in kg)' required />
        </div>
        <div className="col-md-12 text-start">
          <label  className="form-label">Suggestions & Comments</label>
          <textarea className="form-control"  rows="3" required/>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-dark">Submit</button>
        </div>
      </form>

    </div>
  )
};

export default Experience
