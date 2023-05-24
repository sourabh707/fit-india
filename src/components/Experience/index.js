import React, { useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Modal, Button } from 'react-bootstrap';

const Experience = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    height: '',
    startingWeight: '',
    presentWeight: '',
    comments: '',
  });

  const [showModal, setShowModal] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowModal(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      height: '',
      startingWeight: '',
      presentWeight: '',
      comments: '',
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };  

  return (
    <div className='Experience-container'>
      {/* <h1>Share Your Experience</h1> */}
      <form className="row g-3" onSubmit={handleSubmit}>
        <h2>Share your Experience</h2>
        <div className="col-md-6 text-start">
          <label className="form-label text-start">First Name</label>
          <input type="text" className="form-control" placeholder='First Name' required name='firstName' value={formData.firstName} onChange={handleChange} />
        </div>
        <div className="col-md-6 text-start">
          <label className="form-label">Last Name</label>
          <input type="text" className="form-control" placeholder='Last Name' required name='lastName' value={formData.lastName} onChange={handleChange} />
        </div>
        <div className="col-md-9 text-start">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" placeholder='name@example.com' required name='email' value={formData.email} onChange={handleChange} />
        </div>
        <div className="col-md-3 text-start">
          <label className="form-label">Height</label>
          <input type="number" className="form-control" placeholder='Height (in cm)' required name='height' value={formData.height} onChange={handleChange} />
        </div>
        <div className="col-md-6 text-start">
          <label className="form-label">Staring Height</label>
          <input type="number" className="form-control" placeholder='Weight (in kg)' required name='startingWeight' value={formData.startingWeight} onChange={handleChange} />
        </div>
        <div className="col-md-6 text-start">
          <label className="form-label">Present Weight</label>
          <input type="number" className="form-control" placeholder=' Weight (in kg)' required name='presentWeight' value={formData.presentWeight} onChange={handleChange} />
        </div>
        <div className="col-md-12 text-start">
          <label className="form-label">Suggestions & Comments</label>
          <textarea className="form-control" rows="3" required name='comments' value={formData.comments} onChange={handleChange} />
        </div>
        <div className="col">
          <button type="submit" className="btn btn-dark">Submit</button>
        </div>
      </form>



      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Thanks for your suggestions!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>We will surely consider them.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
};

export default Experience
