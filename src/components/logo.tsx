import React from "react"
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className="w-full flex justify-start flex-col">
      <Link to='/'>
        <h1 className="dark:text-white font-bold text-sm">Froilan.</h1>
      </Link>
      <p className='dark:text-white text-[.5rem]'>FrontEnd Developer</p>
    </div>
  )
}

export default Logo