import React from 'react'
import UiUx from './UiUx'
import Frontend from './Frontend'

function Skills() {
  return (
    <div className='flex justify-center'>
        <div className=' xl:flex justify-center '>
            <div className='w-512 h-fit xl:w-100 xl:h-80  mt-8 xl:mr-8 '>
                <div className='w-full xl:py-5 py-8 bg-neutral-950 border-solid border-2 border-neutral-900 text-neutral-400 font-semibold rounded-lg  text-center xl:text-lg text-2xl'>UI/UX Designs</div>
                <UiUx/>
            </div>
            <div className='w-512 h-fit xl:w-100 xl:h-80  mt-14 xl:mt-8  '>
                <div className='w-full  xl:py-5 py-8 bg-neutral-950 border-solid border-2 border-neutral-900 text-neutral-400 font-semibold rounded-lg  text-center xl:text-lg text-2xl '>Frontend Projects</div>
                <Frontend/>
            </div>
        </div>
    </div>
  )
}

export default Skills