import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";

function Linkedin() {
  return (
    <a
    href='https://www.linkedin.com/in/atharv-malve-b852b7284/'
     className='w-36 h-36 mr-8 bg-neutral-950 hover:border-neutral-800 transition-all duration-300 hover:text-neutral-400  text-neutral-200 border-solid border-2 border-neutral-900 rounded-lg'>
        <div className='text-neutral-20 mt-12 flex justify-center'>
            <FaLinkedinIn className='size-10'/>
        </div>
    </a>
  )
}

export default Linkedin