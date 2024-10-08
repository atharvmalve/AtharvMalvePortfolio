import React from 'react';
import post from '../../assets/Blogapp.png'
// import { FaDribbble } from "react-icons/fa";
import { HiOutlineStatusOnline } from "react-icons/hi";

function Frontend() {
  return (
    <div className='w-full xl:h-99 h-256 bg-neutral-950 border-solid border-2 border-neutral-900 xl:mt-8 mt-12  rounded-lg '>
        <div className='flex justify-center '>
            <img src={post} className=' w-full xl:h-80 h-128 rounded-lg mx-2 my-2'></img>
        </div>
        <p className='text-5xl xl:text-lg text-neutral-300 font-medium font-inter text-center mt-6 xl:my-2'>From Beginner to Builder: A React Learning Log</p>
        <div className='flex justify-center'>
            <a href='https://7daysofreact.vercel.app/'>
            <div className='flex mt-8 xl:mt-0 xl:px-6 xl:py-2 px-36 py-6  border-2 border-solid border-neutral-800  hover:bg-neutral-900  rounded-full'>
                    <div className='text-neutral-300  '>
                        <HiOutlineStatusOnline className='mt-0.5 size-8 xl:size-4'/>
                    </div>
                    <div className='ml-4 xl:ml-2 font-inter text-neutral-300 font-semibold xl:font-semibold text-3xl xl:text-sm '> Visit Live</div>
                </div>
            </a>
        </div>
    </div>
  )
}

export default Frontend