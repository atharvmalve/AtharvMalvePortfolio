import React from 'react'
import Email from './Email'
import Linkedin from './Linkedin'
import Twitter from './Twitter'

function Contact() {
  return (
    <div className='xl:flex justify-center mt-64 '>
        <div className='flex justify-center'>

        <Email/>
        </div>
        <div className='flex justify-center mt-8 xl:mt-0'>
          <Linkedin/>
          <Twitter/>
        </div>
    </div>
  )
}

export default Contact