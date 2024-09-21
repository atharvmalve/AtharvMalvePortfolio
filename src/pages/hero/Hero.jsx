import React from 'react'
import About from './About'
import HeroBanner from './HeroBanner'
import HeroSkills from './HeroSkills'
import Design from './Design'

function Hero() {
  return (
    <div className=' xl:flex justify-center'>
      <div>
        <div className='   flex  justify-center  '>
          <About/>
          <HeroBanner/>
        </div>
        <div className='flex justify-center'>
          <HeroSkills/>
        </div>
      </div>
      <div className=' flex justify-center'>
        <Design/>
      </div>
    </div>
  )
}

export default Hero