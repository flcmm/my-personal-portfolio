import React from "react"
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className="w-1/4 flex justify-start flex-col">
      <Link to='/'>
        <h1 className="dark:text-white font-bold co">Froilan.</h1>
        <p className='dark:text-white '>FrontEnd Developer</p>
      </Link>
    </div>
  )
}

export default Logo