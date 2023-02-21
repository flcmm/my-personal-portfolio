import React from 'react'
import { Link } from 'react-router-dom'
// sm, md, lg, xl, 2xl

const Nav = () => {
  return (
    <div className="md:hidden flex flex-row gap-x-5 justify-between items-center">
      <Link to='/services'>
        <h1 className='dark:text-slate-300 text-xs font-medium'> Services</h1>
      </Link>
      <Link to='notes'>
        <h1 className='dark:text-slate-300 text-xs font-medium'> Notes</h1>
      </Link>
      <Link to='works'>
        <h1 className='dark:text-slate-300 text-xs font-medium'> Works</h1>
      </Link>
      <Link to='contact'>
        <h1 className='dark:text-slate-300 text-xs font-medium'>Contact</h1>
      </Link>
    </div>
  )
}

export default Nav