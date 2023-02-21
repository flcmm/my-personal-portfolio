import React from 'react'
import Hero from "../components/avatar"
import Aside from "../components/aside"
import Certificates from '../components/certificate'

const Home = () => {
  return (
    <div className="flex w-full flex-col gap-y-6">
      <div className="flex flex-col-reverse justify-center w-full gap-y-7">
        <div className='flex flex-row w-3/4 self-end gap-3'>
          <svg className='dark:stroke-white w-1/4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 17L17 20M20 17L17 14M20 17L11 17C8.79086 17 7 15.2091 7 13L7 4M7 4L4 7M7 4L10 7" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <Aside />
        </div>
        <Hero />
      </div>

      <div className='w-full flex flex-col justify-center'>
        <div className='w-full pl-[3%]'>
          <h1 className='font-black text-4xl dark:text-white'>Works</h1>
        </div>
      </div>
    </div>
  )
}

export default Home