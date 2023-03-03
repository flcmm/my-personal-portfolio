import React from 'react'
import { Link } from 'react-router-dom'

const CTA4Mobile = () => {
  return (
    <div className="md:hidden flex flex-row justify-end items-center">
      <Link to='/projects'>
        <button className='bg-black p-2 text-white dark:text-black dark:bg-white rounded-lg flex flex-row text-sm'>My Projects</button>
      </Link>
    </div>
  )
}


export default CTA4Mobile