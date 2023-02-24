import React from 'react'
import { Link } from 'react-router-dom'
// sm, md, lg, xl, 2xl

const NavForLargeSC = () => {
  return (
    <div className="md:flex col-span-2 hidden flex-row justify-between items-center">
      <Link to='/about'>
        <h1 className='dark:text-slate-300 lg:text-xl md:text-lg font-medium'>About</h1>
      </Link>
      <Link to='/expertise'>
        <h1 className='dark:text-slate-300 lg:text-xl md:text-lg font-medium'>Expertise</h1>
      </Link>
      <Link to='/projects'>
        <h1 className='dark:text-slate-300 lg:text-xl md:text-lg font-medium'>Projects</h1>
      </Link>
      <Link to='/contact'>
        <h1 className='dark:text-slate-300 lg:text-xl md:text-lg font-medium'>Contact</h1>
      </Link>
    </div>
  )
}

export default NavForLargeSC