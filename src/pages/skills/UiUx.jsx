import React from 'react';
import post from '../../assets/DribblePoster.png'
import { FaDribbble } from "react-icons/fa";

function UiUx() {
  return (
    <div className='w-full xl:h-99 h-256 bg-neutral-950 border-solid border-2 border-neutral-900 mt-8 rounded-lg  '>
        <div className='flex justify-center '>
            <img src={post} className=' w-full xl:h-80 h-128 rounded-lg mx-2 my-2'></img>
        </div>
        <p className='text-5xl xl:text-lg text-neutral-300 font-medium font-inter text-center mt-6 xl:my-2'>HerbChick: A Fresh Take on Healthy Eating</p>
        <div className='flex justify-center'>
            <a href='https://dribbble.com/shots/24898065-HerbChick-A-Fresh-Take-on-Healthy-Eating?utm_source=Clipboard_Shot&utm_campaign=atharvmalve&utm_content=HerbChick%3A%20A%20Fresh%20Take%20on%20Healthy%20Eating&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=atharvmalve&utm_content=HerbChick%3A%20A%20Fresh%20Take%20on%20Healthy%20Eating&utm_medium=Social_Share'>
                <div className='flex mt-8 xl:mt-0 xl:px-6 xl:py-2 px-36 py-6  border-2 border-solid border-neutral-800  hover:bg-neutral-900  rounded-full'>
                    <div className='text-neutral-300  '>
                        <FaDribbble className='mt-0.5 size-8 xl:size-4'/>
                    </div>
                    <div className='ml-4 xl:ml-2 font-inter text-neutral-300 font-semibold xl:font-semibold text-3xl xl:text-sm hover:text-neutral-300'> Dribbble</div>
                </div>
            </a>
        </div>
    </div>
  )
}

export default UiUx