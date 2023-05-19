import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Intro from '../../components/Intro'
import Explore from '../../components/Explore'
import About from '../../components/Footer'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <Intro/>
        <Explore/>
        <About/>
    </div>
  )
}

export default Home