import React from 'react'

function About() {
  return (
    <div className=' w-full  xl:w-64 xl:h-72 h-96  bg-neutral-950 border-solid border-2 border-neutral-900 rounded-2xl xl:py-6 py-12 px-12 xl:px-4  mt-8 xl:mt-0 flex justify-center'>
        <div>
            <h1 className='text-neutral-200 mt-2 text-4xl xl:text-lg font-medium xl:leading-tight'>I'm Atharv, a <span className='bg-gradient-to-r text-transparent bg-clip-text from-purple-700 to-purple-500 font-bold'>Frontend</span> <span className='bg-gradient-to-r text-transparent bg-clip-text from-purple-500 to-purple-700 font-bold'>Developer</span> and <span className='bg-gradient-to-r text-transparent bg-clip-text from-yellow-700 to-yellow-500 font-bold'>UI/UX</span> <span className='bg-gradient-to-r text-transparent bg-clip-text from-yellow-500 to-yellow-700 font-bold'>Designer</span> based in Pune.</h1>
            <h1 className='text-neutral-400 mt-4 xl:text-sm text-3xl font-normal xl:leading-snug'>With a year of experience, I'm passionate about crafting engaging digital experiences.</h1>
            {/* <h1 className='text-neutral-400 mt-4 text-sm leading-snug'>My focus lies in creating intuitive interfaces and building robust web applications.</h1> */}
            <h1 className='uppercase xl:text-sm text-3xl mt-4 text-neutral-200 font-medium'>Currently</h1>
            <h1 className='text-neutral-400 mt-1 xl:text-sm text-3xl  leading-snug'>UX Designer at StarX91 Technologies</h1>
        </div>
    </div>
  )
}

export default About