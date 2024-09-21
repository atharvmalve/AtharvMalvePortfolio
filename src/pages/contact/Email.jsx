import React from 'react'

function Email() {
  return (
    <div className='w-512 xl:w-136 h-36 xl:mr-8  bg-neutral-950 border-solid border-2 border-neutral-900 rounded-lg'>
        <div className='flex justify-evenly mt-11'>
            <div  className=''>
                <p className='font-semibold text-3xl xl:text-lg text-neutral-200 font-inter'>Ready to get started? </p>
                <p className=' text-xl xl:text-base xl:font-normal text-neutral-400 font-inter'>Schedule a quick meeting to discuss your goals.</p>
            </div>
            <a  
            href='mailto:atharvmalve.dev@gmail.com'
            className='mt-2 '>
                <button className=' px-20  py-4 xl:px-10 xl:py-2  text-2xl xl:text-base text-neutral-900 font-bold bg-neutral-300 font-inter rounded-md'> Email me!</button>
            </a>
        </div>
    </div>
  )
}

export default Email