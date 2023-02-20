import React from 'react'
import nodeJSIcon from '../assets/images/nodejs-icon.png'
import reactIcon from '../assets/images/react-icon.png'
import Me from '../assets/images/me.png'

const Avatar = () => {
  return (
    <div className="heroContainer">
      <div className="heroBanner">
        <img src={ Me } alt="me" />
      </div>

      <div className="text">
        <h1>REACT JS</h1>
      </div>

      <div className='react-icon-container'>
        <img src={ reactIcon } alt="react logo" />
      </div>

      <div className='nodejs-icon-container'>
        <img src={ nodeJSIcon } alt="NodeJS logo" />
      </div>
    </div>
  )
}

export default Avatar