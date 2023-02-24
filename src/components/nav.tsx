import React from 'react'
import { Link } from 'react-router-dom'
// sm, md, lg, xl, 2xl

const Nav = () => {
  return (
    <div className="md:hidden flex flex-row gap-x-5 justify-between items-center">
      <Link to='/about'>
        <h1 className='dark:text-slate-300 text-xs font-medium'>About</h1>
      </Link>
      <Link to='/expertise'>
        <h1 className='dark:text-slate-300 text-xs font-medium'>Expertise</h1>
      </Link>
      <Link to='/projects'>
        <h1 className='dark:text-slate-300 text-xs font-medium'>Projects</h1>
      </Link>
      <Link to='/contact'>
        <h1 className='dark:text-slate-300 text-xs font-medium'>Contact</h1>
      </Link>
    </div>
  )
}

export default Nav