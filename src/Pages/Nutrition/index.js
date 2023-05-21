import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import About from '../../components/Footer'
import Nutrition from '../../components/Nutrition'

const NutritionLayout = () => {
  

  return (
    <div>
      <NavBar />
      <Nutrition/>
      <About />
    </div>
  )
}

export default NutritionLayout