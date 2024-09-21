import React from 'react'
import BannerAnimation from './BannerAnimation'
import './HeroBanner.css';
import img from '../../assets/img.jpg';


function Banner() {
  return (
    <div className='flex justify-center  '>
        <div className='  w-512 h-44 mt-8 bg-neutral-950 border-solid border-2 border-neutral-800 rounded-2xl overflow-hidden'>
          
            <p className='bg-gradient-to-r from-purple-700 via-yellow-700 to-orange-700 text-transparent bg-clip-text animate-gradient text-center uppercase text-5xl font-semibold mt-12 font-inter'>Chasing top 1%</p>
            <p className='text-neutral-300 opacity-80 text-center uppercase text-xs font-medium mt-1 font-inter'>Every Project is a step closer.</p>
        </div>
    </div>
  )
}

export default Banner