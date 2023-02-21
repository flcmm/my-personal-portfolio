import React from 'react'
import nodeJSIcon from '../assets/images/nodejs-icon.png'
import reactIcon from '../assets/images/react-icon.png'
import Me from '../assets/images/me.png'

const Avatar = () => {
  return (
    <div className="w-full flex justify-center items-center relative">
      <div className="w-1/2 z-10">
        <img className='w-full ' src={ Me } alt="me" />
      </div>

      <div className='react-icon-container absolute w-1/4 top-0 left-[25%] z-1'>
        <img className='w-full' src={ reactIcon } alt="react logo" />
      </div>

      <div className='nodejs-icon-container absolute z-20 w-1/4 bottom-0 right-[15%]'>
        <img className='w-full' src={ nodeJSIcon } alt="NodeJS logo" />
      </div>
    </div>
  )
}

export default Avatar