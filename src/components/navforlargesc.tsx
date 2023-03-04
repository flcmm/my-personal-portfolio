import React from 'react'
import { Link } from 'react-router-dom'
// sm, md, lg, xl, 2xl

const NavForLargeSC = () => {
  return (
    <div className="md:flex gap-5 col-span-2 hidden flex-row justify-between items-center">
      <Link to='/about'>
        <h1 className='dark:text-slate-300 lg:text-lg md:text-md font-medium'>About</h1>
      </Link>
      <Link to='/expertise'>
        <h1 className='dark:text-slate-300 lg:text-lg md:text-md font-medium'>Expertise</h1>
      </Link>
      <Link to='/contact'>
        <h1 className='dark:text-slate-300 lg:text-lg md:text-md font-medium'>Contact</h1>
      </Link>
    </div>
  )
}

export default NavForLargeSC