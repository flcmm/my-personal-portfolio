import React from 'react'
import nodeJSIcon from '../assets/images/nodejs-icon.png'
import reactIcon from '../assets/images/react-icon.png'
import Me from '../assets/images/me.png'

const Avatar = () => {
  return (
    <div className="w-1/2 relative">
      <div className="w-1/2">
        <img src={ Me } alt="me" />
      </div>

      <div className='react-icon-container absolute top-0'>
        <img src={ reactIcon } alt="react logo" />
      </div>

      <div className='nodejs-icon-container absolue top-0'>
        <img src={ nodeJSIcon } alt="NodeJS logo" />
      </div>
    </div>
  )
}

export default Avatar