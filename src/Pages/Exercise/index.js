import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import About from '../../components/Footer'
import Exercise from '../../components/Exercise'

const ExerciseLayout = () => {
  return (
    <div>
      <NavBar/>
      <Exercise/>
      <About/>
    </div>
  )
}

export default ExerciseLayout