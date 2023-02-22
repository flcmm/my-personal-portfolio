import React from 'react'
import Hero from "../components/avatar"
import Aside from "../components/aside"
import Certificates from '../components/certificate'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-col-reverse justify-center w-full gap-y-7 bg-slate-200 dark:bg-stone-800">
        <div className='flex flex-row w-3/4 self-end gap-3'>
          <svg className='dark:stroke-white w-1/4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 17L17 20M20 17L17 14M20 17L11 17C8.79086 17 7 15.2091 7 13L7 4M7 4L4 7M7 4L10 7" stroke="inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <Aside />
        </div>
        <Hero />
      </div>

      <div className='w-full flex flex-col bg-white dark:bg-stone-900 justify-center pt-7'>
        <div className='w-full pl-[3%]'>
          <h1 className='font-black text-4xl text-black dark:text-white'>Works</h1>
        </div>

        <div className='flex justify-center items-center pt-[10rem] pb-[10rem]'>
          <h1 className='font-black text-lg text-black dark:text-white'>Coming Soon...</h1>
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
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><rect fill="none" height="24" width="24"/><path d="M9,6L9,6c0,0.56,0.45,1,1,1h5.59L4.7,17.89c-0.39,0.39-0.39,1.02,0,1.41h0c0.39,0.39,1.02,0.39,1.41,0L17,8.41V14 c0,0.55,0.45,1,1,1H18c0.55,0,1-0.45,1-1V6c0-0.55-0.45-1-1-1H10C9.45,5,9,5.45,9,6z"/></svg>
          </button>
        </div>
      </div>

      <div className="flex flex-row w-full">
        <div className='flex flex-col'>
          <p>Quick Links</p>
          <Link to='Experience'>
            <h1 className='text-black dark:text-white font-medium'>Experience</h1>
          </Link>
          <Link to='Experience'>
            <h1 className='text-black dark:text-white font-medium'>Contact</h1>
          </Link>
          <Link to='Experience'>
            <h1 className='text-black dark:text-white font-medium'>Services</h1>
          </Link>
        </div>

        <div className='flex flex-col justify-end items-center'>
          <h1>Froilan Aquino.</h1>
        </div>

        <div className="flex flex-col justify-start">
          <button className='flex flex-row gap-5 bg-transparent border-none'>
            <svg className='fill-black dark:fill-white' fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 186.846 186.846" xmlSpace="preserve">
              <path d="M93.423,0.001C41.909,0.001,0,41.91,0,93.423s41.909,93.422,93.423,93.422s93.423-41.909,93.423-93.422
              S144.937,0.001,93.423,0.001z M154.303,44.061c10.488,12.91,16.945,29.205,17.482,46.968c-19.428-4.022-37.02-3.55-52.55-0.505
              c-2.812-6.576-5.723-12.841-8.661-18.762C127.487,64.476,142.211,55.17,154.303,44.061z M143.779,33.365
              c-12.003,10.956-25.913,19.068-40.156,25.057C93.169,39.305,83.167,24.909,77.074,16.728c5.276-1.124,10.743-1.727,16.349-1.727
              C112.58,15.001,130.145,21.915,143.779,33.365z M61.924,21.627c4.601,5.962,15.56,20.89,27.332,42.129
              C59.67,73.395,30.962,75.019,17.167,75.17C22.917,51.15,39.738,31.399,61.924,21.627z M15.082,90.208
              c0.148,0,0.291,0.001,0.442,0.001c9.532,0,26.996-0.641,47.556-4.39c11.73-2.139,22.853-5.018,33.29-8.586
              c2.717,5.415,5.418,11.127,8.037,17.114c-14.614,4.705-26.938,11.475-36.7,18.197c-16.37,11.273-27.838,23.78-34.1,31.513
              C22.013,130.384,15,112.712,15,93.423C15,92.345,15.038,91.276,15.082,90.208z M44.416,154.582
              c5.391-6.788,16.364-19.143,32.237-29.984c10.787-7.368,21.947-12.842,33.436-16.435c6.666,17.278,12.357,36.369,15.75,56.64
              c-9.888,4.508-20.858,7.042-32.416,7.042C74.891,171.845,57.852,165.37,44.416,154.582z M139.639,156.726
              c-3.497-18.617-8.712-36.122-14.741-52.12c14.83-2.502,30.157-1.986,45.899,1.55C167.402,126.846,155.889,144.83,139.639,156.726z"
              />
            </svg>
            Dribbble
          </button>

          <button className='flex flex-row gap-5 bg-transparent border-none'>
            <svg className='fill-black dark:fill-white' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"/>
              <path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"/>
            </svg>
            Instagram
          </button>

          <button className='flex flex-row gap-5 bg-transparent border-none'>
            <svg className='fill-black dark:fill-white' viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <title>medium</title>
              <path d="M30.955 16c0 3.951-0.661 7.166-1.483 7.166s-1.483-3.215-1.483-7.166 0.661-7.166 1.483-7.166 1.483 3.215 1.483 7.166zM27.167 16c0 4.412-1.882 8.001-4.212 8.001s-4.225-3.589-4.225-8.001 1.894-8.001 4.225-8.001 4.212 3.589 4.212 8.001zM17.919 16c-0.014 4.67-3.803 8.45-8.475 8.45-4.68 0-8.475-3.794-8.475-8.475s3.794-8.475 8.475-8.475c2.351 0 4.479 0.957 6.014 2.504l0.001 0.001c1.521 1.531 2.46 3.641 2.46 5.97 0 0.009 0 0.018-0 0.026v-0.001z"></path>
            </svg>
            Medium
          </button>

          <button className='flex flex-row gap-5 bg-transparent border-none'>
            <svg className='fill-black dark:fill-white' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.919 24.94c-2.548 0-4.921-.747-6.919-2.032a9.049 9.049 0 0 0 6.681-1.867 4.512 4.512 0 0 1-4.215-3.137c.276.054.559.082.848.082.412 0 .812-.056 1.193-.156a4.519 4.519 0 0 1-3.622-4.425v-.059a4.478 4.478 0 0 0 2.042.564 4.507 4.507 0 0 1-2.008-3.758c0-.824.225-1.602.612-2.268a12.811 12.811 0 0 0 9.303 4.715 4.517 4.517 0 0 1 7.692-4.115 9.107 9.107 0 0 0 2.866-1.094 4.542 4.542 0 0 1-1.983 2.498 9.08 9.08 0 0 0 2.592-.71 9.283 9.283 0 0 1-2.252 2.337c.008.193.014.388.014.583-.001 5.962-4.542 12.843-12.844 12.842"/>
            </svg>
            Twitter
          </button>

          <button className='flex flex-row gap-5 bg-transparent border-none'>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.59 5.88997C17.36 5.31997 16.05 4.89997 14.67 4.65997C14.5 4.95997 14.3 5.36997 14.17 5.69997C12.71 5.47997 11.26 5.47997 9.83001 5.69997C9.69001 5.36997 9.49001 4.95997 9.32001 4.65997C7.94001 4.89997 6.63001 5.31997 5.40001 5.88997C2.92001 9.62997 2.25001 13.28 2.58001 16.87C4.23001 18.1 5.82001 18.84 7.39001 19.33C7.78001 18.8 8.12001 18.23 8.42001 17.64C7.85001 17.43 7.31001 17.16 6.80001 16.85C6.94001 16.75 7.07001 16.64 7.20001 16.54C10.33 18 13.72 18 16.81 16.54C16.94 16.65 17.07 16.75 17.21 16.85C16.7 17.16 16.15 17.42 15.59 17.64C15.89 18.23 16.23 18.8 16.62 19.33C18.19 18.84 19.79 18.1 21.43 16.87C21.82 12.7 20.76 9.08997 18.61 5.88997H18.59ZM8.84001 14.67C7.90001 14.67 7.13001 13.8 7.13001 12.73C7.13001 11.66 7.88001 10.79 8.84001 10.79C9.80001 10.79 10.56 11.66 10.55 12.73C10.55 13.79 9.80001 14.67 8.84001 14.67ZM15.15 14.67C14.21 14.67 13.44 13.8 13.44 12.73C13.44 11.66 14.19 10.79 15.15 10.79C16.11 10.79 16.87 11.66 16.86 12.73C16.86 13.79 16.11 14.67 15.15 14.67Z" className='fill-black dark:fill-white'/>
            </svg>
            Discord
          </button>

          <button className='flex flex-row gap-5 bg-transparent border-none'>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z" className='fill-black dark:fill-white'/>
            </svg>
            Facebook
          </button>


        </div>
      </div>
    </div>
  )
}

export default Home