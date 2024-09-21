import React from 'react'
import Hero from './hero/Hero';
import Banner from './banner/Banner'
import Skills from './skills/Skills'
import Contact from './contact/Contact'
import CustomScrollbar from '../components/scroll/CustomScrollbar.jsx';

function Website() {
  return (
    // <CustomScrollbar>
    <div 
    className='h-fit  min-h-screen  w-fit xl:w-full max-w-screen bg-black p-10 scrollbar-corner-neutral-900 scrollbar-track-red-800 '>
        <Hero/>
        <Banner/>
        <Skills/>
        <Contact/>
    </div>
      
  )
}

export default Website