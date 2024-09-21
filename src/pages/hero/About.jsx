import React from 'react'

function About() {
  return (
    <div className=' w-97 xl:w-64 h-72  bg-neutral-950 border-solid border-2 border-neutral-900 rounded-2xl xl:py-6 py-12 px-10 xl:px-4'>
        <div>
            <h1 className='text-neutral-200 mt-2 text-lg font-medium leading-tight'>I'm Atharv, a <span className='bg-gradient-to-r text-transparent bg-clip-text from-purple-700 to-purple-500 font-bold'>Frontend</span> <span className='bg-gradient-to-r text-transparent bg-clip-text from-purple-500 to-purple-700 font-bold'>Developer</span> and <span className='bg-gradient-to-r text-transparent bg-clip-text from-yellow-700 to-yellow-500 font-bold'>UI/UX</span> <span className='bg-gradient-to-r text-transparent bg-clip-text from-yellow-500 to-yellow-700 font-bold'>Designer</span> based in Pune.</h1>
            <h1 className='text-neutral-400 mt-4 text-sm font-normal leading-snug'>With a year of experience, I'm passionate about crafting engaging digital experiences.</h1>
            {/* <h1 className='text-neutral-400 mt-4 text-sm leading-snug'>My focus lies in creating intuitive interfaces and building robust web applications.</h1> */}
            <h1 className='uppercase text-sm mt-4 text-neutral-200 font-medium'>Currently</h1>
            <h1 className='text-neutral-400 mt-1 text-sm leading-snug'>UX Designer at StarX91 Technologies</h1>
        </div>
    </div>
  )
}

export default About