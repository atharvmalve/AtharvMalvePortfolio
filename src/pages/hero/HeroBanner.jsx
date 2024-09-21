import React from 'react';
// import './HeroBanner.css';
import logo from '../../assets/logo.svg';
import './Banner.css';

function HeroBanner() {
  return (
    <div className='h-48 w-97  xl:w-128  xl:h-48 mt-12 xl:mx-4 mx-8 bg-neutral-950 border-solid border-2 border-neutral-900 rounded-lg
    flex justify-center'>
      <img  src={logo} className=' size-56 xl:size-56 -mt-6 xl:-mt-4 animate-move'></img>
    </div>
  )
}

export default HeroBanner;