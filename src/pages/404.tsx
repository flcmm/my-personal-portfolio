import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex py-60 gap-44 justify-center items-center flex-col text-center'>
      <div className="flex px-10 flex-col gap-1 text-center">
        <h1 className='text-2xl font-black text-black dark:text-white'>404 Not Found</h1>
        <h1 className='text-2xl text-black font-semibold dark:text-white'>The page you're looking for cannot be found in our server</h1>
      </div>
      <Link to={'/'}>
        <h1 className='text-white bg-white p-4 rounded-lg font-semibold dark:text-black'>Go Back To HomePage</h1>
      </Link>
    </div>
  )
}

export default NotFound