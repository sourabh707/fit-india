import React from 'react'
import logo from '../../../src/LOGO.png'

import './index.css'
function Intro() {

  return (
    <div className='intro-container' >
      <div className='intro-img'>
        <img src={logo} alt='' />
      </div>
      <div className='intro-content'>
        <h1>FIT INDIA</h1>
        <br />
        <p> <b>The Fit India </b>Application is a comprehensive fitness application designed to help users track their workouts, set fitness goals, and stay motivated on their fitness journey. The application provides a range of features and functionalities that cater to the needs of gym-goers and fitness enthusiasts. Whether you are a beginner or an experienced athlete, the Fit India Gym Application has something to offer for everyone.<br /><br /> <i>Exercise Library: </i>The application provides a vast exercise library with detailed instructions and demonstration videos for various exercises. Users can explore different workout routines and learn how to perform exercises correctly to maximize their effectiveness and prevent injuries.</p>
        <p><i>Nutrition and Meal Planning: </i>The application includes a nutrition feature that allows users to track their daily caloricF intake and monitor macronutrients. It also offers meal planning options with healthy recipes and nutrition tips to support users in maintaining a well-balanced diet that aligns with their fitness goals.<br /><br /><i>Integration with Fitness Wearables: </i> The Fit India Gym Application seamlessly integrates with popular fitness wearables and devices, allowing users to sync their workout data and track their activity levels effortlessly..</p>

      </div>
    </div>
  )
}

export default Intro;