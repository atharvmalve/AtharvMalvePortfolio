import React from 'react'
import './HeroBanner.css';

function BannerAnimation() {
  return (
    <div className='w-512 absolute overflow-hidde '>
        <div className=" absolute overflow-hidden ">
            <div className=' p-10 opacity-75 animate-banner duration-300 bg-white block overflow-hidde'></div>
        </div>
    </div>
  )
}

export default BannerAnimation