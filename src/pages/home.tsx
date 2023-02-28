import React from 'react'
import Hero from "../components/avatar"
import Aside from "../components/aside"
import Certificates from '../components/certificate'
import { Link } from 'react-router-dom'
import Mock from '../assets/images/mock-image.png'

const Home = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-col-reverse justify-center w-full gap-y-7 bg-slate-200 dark:bg-stone-800">
        <div className='flex flex-row w-3/4 self-end gap-3'>
          <svg className='dark:stroke-white w-1/4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 17L17 20M20 17L17 14M20 17L11 17C8.79086 17 7 15.2091 7 13L7 4M7 4L4 7M7 4L10 7" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <Aside />
        </div>
        <Hero />
      </div>

      <div className='w-full flex flex-col gap-5 bg-white dark:bg-stone-900 justify-center pt-7'>
        <div className='w-full pl-[3%]'>
          <h1 className='font-black text-4xl text-black dark:text-white'>Works</h1>
        </div>

        <div className='flex justify-center items-center'>
          <div className="w-4/5 rounded-xl overflow-hidden">
            <img className='w-full transition ease-in-out duration-300 scale-100 hover:scale-150' src={ Mock } alt="Mock Image" />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col bg-white dark:bg-stone-900 justify-center pt-7">
        <div className='w-full pl-[3%]'>
          <h1 className='font-black text-4xl text-black dark:text-white'>Certificates</h1>
        </div>

        <div className='flex justify-center items-center pt-[10rem] pb-[10rem]'>
          <h1 className='font-black text-lg text-black dark:text-white'>Coming Soon...</h1>
        </div>
      </div>

      <div className="w-full flex flex-col bg-white dark:bg-stone-900 justify-center pt-7">
        <div className='w-full pl-[3%]'>
          <h1 className='font-black text-4xl text-black dark:text-white'>Blogs</h1>
        </div>

        <div className='flex justify-center items-center pt-[10rem] pb-[10rem]'>
          <h1 className='font-black text-lg text-black dark:text-white'>Coming Soon...</h1>
        </div>

        <div className="flex flex-row gap-4 justify-center items-center">
          <button onClick={() => {window.open('https://frlnaqn.medium.com/', "_blank")}} className='flex flex-row p-3 gap-4 border-none rounded-md bg-black dark:bg-white text-white dark:text-black'>
            View All On Medium
            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24"/><path d="M9,6L9,6c0,0.56,0.45,1,1,1h5.59L4.7,17.89c-0.39,0.39-0.39,1.02,0,1.41h0c0.39,0.39,1.02,0.39,1.41,0L17,8.41V14 c0,0.55,0.45,1,1,1H18c0.55,0,1-0.45,1-1V6c0-0.55-0.45-1-1-1H10C9.45,5,9,5.45,9,6z"/></svg>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Home