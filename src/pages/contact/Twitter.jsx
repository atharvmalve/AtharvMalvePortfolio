import React from 'react'
import { RiTwitterXFill } from "react-icons/ri";

function Twitter() {
  return (
    <a 
    href='https://x.com/Learningmonkk'
    className='w-36 h-36  bg-neutral-950 hover:border-neutral-800 transition-all duration-300 hover:text-neutral-400  text-neutral-200 border-solid border-2 border-neutral-900 rounded-lg'>
        <div className='text-neutral-20 mt-12 flex justify-center'>
            <RiTwitterXFill className='size-10'/>
        </div>
    </a>
  )
}

export default Twitter