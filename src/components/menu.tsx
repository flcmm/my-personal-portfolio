import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className="flex w-1/3 flex-row justify-between items-center">
      <Link to='/services'>
        <h1 className='dark:text-slate-300 font-medium'>&lt; Services &gt;</h1>
      </Link>
      <Link to='notes'>
        <h1 className='dark:text-slate-300 font-medium'>&lt; Notes &gt;</h1>
      </Link>
      <Link to='works'>
        <h1 className='dark:text-slate-300 font-medium'>&lt; Works &gt;</h1>
      </Link>
      <Link to='contact'>
        <h1 className='dark:text-slate-300 font-medium'>&lt; Contact &gt;</h1>
      </Link>
    </div>
  )
}

export default Menu