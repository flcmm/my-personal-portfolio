import React from 'react'

const Expertise = () => {
  return (
    <div className="flex flex-col gap-10 px-5">
      <h1 className='text-black text-center dark:text-white font-black text-4xl'>Certifications</h1>
      <div className="flex flex-col gap-5">

        <div className="w-full grid grid-cols-2 gap-3 grid-flow-row grid-rows-3">
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
              <p className='justify-self-start text-white dark:text-black'>12 - 10 - 2022</p>
              <div className='w-[15%] grid rounded-full place-content-center bg-white dark:bg-black '>
                <svg onClick={() => window.open('https://drive.google.com/file/d/1KJ7tA8BpiMuyWgSaTRd2tSYS6P6b7Nxp/view?usp=sharing', '_blank')} className='fill-black w-full rounded-full dark:fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
                  <path d="M0 0h24v24H0V0z" fill="none"/>
                  <path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="flex text-left p-[5%] justify-evenly rounded-lg w-full bg-black dark:bg-white flex-col">
            <h1 className='text-white dark:text-black'>Title</h1>
            <p className='text-white dark:text-black'>Source</p>
            <div className="flex flex-row w-full justify-between">
              <p className='justify-self-start text-white dark:text-black'>Date</p>
              <div className='w-[15%] grid rounded-full place-content-center bg-white dark:bg-black '>
                <svg className='fill-black w-full rounded-full dark:fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
                  <path d="M0 0h24v24H0V0z" fill="none"/>
                  <path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="flex text-left p-[5%] justify-evenly rounded-lg w-full bg-black dark:bg-white flex-col">
            <h1 className='text-white dark:text-black'>Title</h1>
            <p className='text-white dark:text-black'>Source</p>
            <div className="flex flex-row w-full justify-between">
              <p className='justify-self-start text-white dark:text-black'>Date</p>
              <div className='w-[15%] grid rounded-full place-content-center bg-white dark:bg-black '>
                <svg className='fill-black w-full rounded-full dark:fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
                  <path d="M0 0h24v24H0V0z" fill="none"/>
                  <path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col text-center gap-5">
        <h1 className='text-black dark:text-white text-4xl font-black'>Experience</h1>

        <div className="flex-col gap-5 flex">
          <div className="relative">
            <h1 className='font-bold text-black dark:text-white text-md absolute top-0 left-0'>2025</h1>
            <div className="text-center flex p-4 bg-black dark:bg-white rounded-lg flex-col gap-2">
              <h1 className='text-white dark:text-black'>Bachelors Degree</h1>
              <p className='text-white dark:text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum a accusamus beatae dolorum, qui pariatur earum numquam odit id, sequi suscipit commodi totam perferendis ipsam maxime, expedita quos animi fugiat. Dicta nulla ea, illum aliquam dolorem odit ipsam voluptatum eius et ducimus nostrum dolore consequuntur amet aperiam quis eum libero ex, molestias earum sit. Sunt tenetur hic porro? Ipsa dolor pariatur deleniti fugiat recusandae minus magni porro repudiandae labore necessitatibus temporibus veniam aut maiores nobis soluta deserunt, expedita nemo, ipsum architecto, sapiente eum? Nesciunt porro soluta adipisci in earum eum debitis cupiditate hic incidunt repellendus, ipsum impedit eius. Temporibus, excepturi.</p>
            </div>
          </div>

          <div className="relative">
            <h1 className='font-bold text-black dark:text-white text-md absolute top-0 left-0'>2025</h1>
            <div className="text-center flex p-4 bg-black dark:bg-white rounded-lg flex-col gap-2">
              <h1 className='text-white dark:text-black'>Bachelors Degree</h1>
              <p className='text-white dark:text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum a accusamus beatae dolorum, qui pariatur earum numquam odit id, sequi suscipit commodi totam perferendis ipsam maxime, expedita quos animi fugiat. Dicta nulla ea, illum aliquam dolorem odit ipsam voluptatum eius et ducimus nostrum dolore consequuntur amet aperiam quis eum libero ex, molestias earum sit. Sunt tenetur hic porro? Ipsa dolor pariatur deleniti fugiat recusandae minus magni porro repudiandae labore necessitatibus temporibus veniam aut maiores nobis soluta deserunt, expedita nemo, ipsum architecto, sapiente eum? Nesciunt porro soluta adipisci in earum eum debitis cupiditate hic incidunt repellendus, ipsum impedit eius. Temporibus, excepturi.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Expertise