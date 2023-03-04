import React from 'react'
import WeatherImage from '../assets/images/mock-image.png'

const Projects = () => {
  return (
    <div className="w-full flex flex-col gap-10 px-5">
      <h1 className='font-black dark:text-white text-black text-center text-4xl'>Projects</h1>

      <div className="w-full flex-col flex">
        <div className="flex flex-col w-full items-center justify-center">
          <h1 className='text-black dark:text-white font-semibold self-start'>Weather Web Application</h1>
          <div className="relative overflow-hidden">
            <img src={ WeatherImage } alt="" className="w-full rounded-lg" />
          </div>
          <p className='font-semibold text-xs text-center text-white'>Dynamic Weather Application Using ReactJS</p>
        </div>
      </div>
    </div>
  )
}

export default Projects