import React, { useState, useRef } from 'react'
import Hero from "../components/avatar"
import Aside from "../components/aside"
import Certificates from '../components/certificate'
import { Link } from 'react-router-dom'
import Mock from '../assets/images/mock-image.png'

const Home = () => {
  const [isHover, setHover] = useState(false)
  // const textOne = useRef(null)
  const mouseEnter = () => {
    setHover(prevState => !prevState)
    console.log(isHover)
  }
  const mouseLeave = () => {
    setHover(prevState => !prevState)
  }

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
          <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className="w-4/5 rounded-xl relative overflow-hidden">
            <img style={{transform: isHover ? 'scale(1)' : 'scale(1.5)' }} className='w-full cursor-pointer scale-100 ease-in-out duration-300' src={ Mock } alt="Mock Image" />
            <div style={{opacity: isHover ? '0' : '1' }} className="backdrop-blur-sm duration-300 top-0 absolute w-full h-[999px]"></div>
            <h1 style={{left: isHover ? '-10rem' : '5%'}} className='top-0 ease-in-out mt-4 duration-300 font-bold absolute  text-white'>Weather App</h1>
            <p style={{left: isHover ? '-10rem' : '5%'}} className='absolute duration-300 ease-in-out text-white top-20'>Coming Soon...</p>
            <svg onClick={() => {window.open('https://github.com/flcmm/weather-app', "_blank")}} style={{bottom: isHover ? '-5rem' : '1rem'}} className='absolute cursor-pointer duration-300 ease-in-out mr-5 right-0 bottom-0' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M16.01 11H5c-.55 0-1 .45-1 1s.45 1 1 1h11.01v1.79c0 .45.54.67.85.35l2.78-2.79c.19-.2.19-.51 0-.71l-2.78-2.79c-.31-.32-.85-.09-.85.35V11z"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col bg-white dark:bg-stone-900 justify-center pt-7">
        <div className='w-full p-3 flex-col flex gap-4'>
          <h1 className='font-black text-4xl text-black dark:text-white'>Certificates</h1>

          <div className="grid grid-cols-2 gap-4 grid-rows-2">
            <div className="flex text-left p-[5%] justify-evenly rounded-lg w-full bg-black dark:bg-white flex-col">
              <h1 className='text-white dark:text-black'>Intro to CSS</h1>
              <p className='text-white dark:text-black'>TESDA</p>
              <div className="flex flex-row w-full justify-between">
                <p className='justify-self-start text-white dark:text-black'>04 - 15 - 2021</p>
                <div className='w-[15%] grid rounded-full place-content-center bg-white dark:bg-black '>
                  <svg onClick={ () => window.open('https://drive.google.com/file/d/1EF4D8QAUxrG5Arlft3V9neKnZisYR96n/view?usp=sharing', '_blank')} className='fill-black w-full rounded-full dark:fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex text-left p-[5%] justify-evenly rounded-lg w-full bg-black dark:bg-white flex-col">
              <h1 className='text-white dark:text-black'>ZUITT - Coding Bootcamp</h1>
              <p className='text-white dark:text-black'>ZUITT</p>
              <div className="flex flex-row w-full justify-between">
                <p className='justify-self-start text-white dark:text-black'>02 - 04 - 2023</p>
                <div className='w-[15%] grid rounded-full place-content-center bg-white dark:bg-black '>
                  <svg onClick={()=> window.open('https://drive.google.com/file/d/1ECvPujAHXynY2Q8zBbiy8EWYaQVfsQLW/view?usp=sharing', '_blank')} className='fill-black w-full rounded-full dark:fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex text-left p-[5%] justify-evenly rounded-lg w-full bg-black dark:bg-white flex-col">
              <h1 className='text-white dark:text-black'>A User Research Method</h1>
              <p className='text-white dark:text-black'>GDSC - PUP</p>
              <div className="flex flex-row w-full justify-between">
                <p className='justify-self-start text-white dark:text-black'>12 - 07 - 2022</p>
                <div className='w-[15%] grid rounded-full place-content-center bg-white dark:bg-black '>
                  <svg onClick={() => window.open('https://drive.google.com/file/d/149Z_90xneROjYE6n7MhRjDDD8F5qLFHv/view?usp=sharing', '_blank')} className='fill-black w-full rounded-full dark:fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex text-left p-[5%] justify-evenly rounded-lg w-full bg-black dark:bg-white flex-col">
              <h1 className='text-white dark:text-black'>Inspiring Women In Data & AI</h1>
              <p className='text-white dark:text-black'>GDSC - PUP</p>
              <div className="flex flex-row w-full justify-between">
                <p className='justify-self-star text-white dark:text-black'>12 - 10 - 2022</p>
                <div className='w-[15%] grid rounded-full place-content-center bg-white dark:bg-black '>
                  <svg onClick={() => window.open('https://drive.google.com/file/d/1KJ7tA8BpiMuyWgSaTRd2tSYS6P6b7Nxp/view?usp=sharing', '_blank')} className='fill-black w-full rounded-full dark:fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full grid place-content-center'>
          <Link to={'/expertise'}>
            <h1 className='text-white dark:text-black p-3 rounded-lg bg-black dark:bg-white'>View All</h1>
          </Link>
        </div>
      </div>

      <div className="w-full flex flex-col gap-4 items-center bg-white dark:bg-stone-900 justify-center p-4">
        <div className='w-full'>
          <h1 className='font-black text-4xl text-black dark:text-white'>Blogs</h1>
        </div>

        <div className="flex-col flex gap-3 w-full justify-center">
          <div className="w-full flex flex-col gap-6 rounded-lg bg-black dark:bg-white p-5">
            <div className="w-full flex-row justify-start">
              <h1 className='dark:text-black text-white font-semibold'>froilan</h1>
            </div>

            <div className="flex-col flex gap-3">
              <h1 className='text-white font-bold dark:text-black'>Title Here</h1>
              <p className='text-white dark:text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, possimus earum asperiores debitis id totam aut veritatis eius, nam aspernatur ullam ratione sed expedita praesentium accusamus harum dicta officiis quod explicabo quidem beatae adipisci assumenda nulla? Assumenda eligendi cumque, consequuntur obcaecati odit error ducimus commodi iure velit aspernatur aut ea eius eveniet saepe eos quam voluptate ut dolorum veniam. Id quae vel voluptatum distinctio eos quo, corporis voluptatem sequi laboriosam neque hic labore dolorum dolore.</p>
              <p className="text-white dark:text-black text-right">12 - 01 - 2022</p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-6 rounded-lg bg-black dark:bg-white p-5">
            <div className="w-full flex-row justify-start">
              <h1 className='dark:text-black text-white font-semibold'>froilan</h1>
            </div>

            <div className="flex-col flex gap-3">
              <h1 className='text-white font-bold dark:text-black'>Title Here</h1>
              <p className='text-white dark:text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, possimus earum asperiores debitis id totam aut veritatis eius, nam aspernatur ullam ratione sed expedita praesentium accusamus harum dicta officiis quod explicabo quidem beatae adipisci assumenda nulla? Assumenda eligendi cumque, consequuntur obcaecati odit error ducimus commodi iure velit aspernatur aut ea eius eveniet saepe eos quam voluptate ut dolorum veniam. Id quae vel voluptatum distinctio eos quo, corporis voluptatem sequi laboriosam neque hic labore dolorum dolore.</p>
              <p className="text-white dark:text-black text-right">12 - 25 - 2022</p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-6 rounded-lg bg-black dark:bg-white p-5">
            <div className="w-full flex-row justify-start">
              <h1 className='dark:text-black text-white font-semibold'>froilan</h1>
            </div>

            <div className="flex-col flex gap-3">
              <h1 className='text-white font-bold dark:text-black'>Title Here</h1>
              <p className='text-white dark:text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, possimus earum asperiores debitis id totam aut veritatis eius, nam aspernatur ullam ratione sed expedita praesentium accusamus harum dicta officiis quod explicabo quidem beatae adipisci assumenda nulla? Assumenda eligendi cumque, consequuntur obcaecati odit error ducimus commodi iure velit aspernatur aut ea eius eveniet saepe eos quam voluptate ut dolorum veniam. Id quae vel voluptatum distinctio eos quo, corporis voluptatem sequi laboriosam neque hic labore dolorum dolore.</p>
              <p className="text-white dark:text-black text-right">12 - 30 - 2022</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4 justify-center items-center">
          <button onClick={() => {window.open('https://frlnaqn.medium.com/', "_blank")}} className='flex flex-row p-3 gap-4 border-none rounded-md bg-black dark:bg-white text-white dark:text-black'>
            View All On Medium
            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" className='fill-white dark:fill-dark'><rect fill="none" height="24" width="24"/><path d="M9,6L9,6c0,0.56,0.45,1,1,1h5.59L4.7,17.89c-0.39,0.39-0.39,1.02,0,1.41h0c0.39,0.39,1.02,0.39,1.41,0L17,8.41V14 c0,0.55,0.45,1,1,1H18c0.55,0,1-0.45,1-1V6c0-0.55-0.45-1-1-1H10C9.45,5,9,5.45,9,6z"/></svg>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Home