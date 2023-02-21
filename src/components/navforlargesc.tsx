import React from 'react'
import { Link } from 'react-router-dom'
// sm, md, lg, xl, 2xl

const NavForLargeSC = () => {
  return (
    <div className="md:flex col-span-2 hidden flex-row justify-between items-center">
      <Link to='/services'>
        <h1 className='dark:text-slate-300 lg:text-xl md:text-lg font-medium'> Services</h1>
      </Link>
      <Link to='notes'>
        <h1 className='dark:text-slate-300 lg:text-xl md:text-lg font-medium'> Notes</h1>
      </Link>
      <Link to='works'>
        <h1 className='dark:text-slate-300 lg:text-xl md:text-lg font-medium'> Works</h1>
      </Link>
      <Link to='contact'>
        <h1 className='dark:text-slate-300 lg:text-xl md:text-lg font-medium'>Contact</h1>
      </Link>
    </div>
  )
}

export default NavForLargeSC