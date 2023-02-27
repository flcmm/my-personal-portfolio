import React from 'react'

const Expertise = () => {
  return (
    <div className="servicesContainer">
      <div className="flex flex-col text-center gap-5 px-5">
        <h1 className='text-black dark:text-white font-black text-xl'>Certifications</h1>

        <div className="w-full flex flex-row">
          <div className="flex w-1/4 flex-col">
            <h1>Title</h1>
            <p>Source</p>
            <div className="flex flex-row w-full justify-between">
              <p>Date</p>
              <svg className='fill-black dark:fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-flex-col text-center gap-5 px-5">
        <h1 className='text-black dark:text-white text-xl font-black'>Experience</h1>

        <div className="flex-col gap-5 flex">
          <div className="relative">
            <h1 className='font-bold text-black dark:text-white text-md absolute top-0 left-0'>2025</h1>
            <div className="text-center flex p-3 bg-black dark:bg-white rounded-lg flex-col gap-2">
              <h1>Bachelors Degree</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum a accusamus beatae dolorum, qui pariatur earum numquam odit id, sequi suscipit commodi totam perferendis ipsam maxime, expedita quos animi fugiat. Dicta nulla ea, illum aliquam dolorem odit ipsam voluptatum eius et ducimus nostrum dolore consequuntur amet aperiam quis eum libero ex, molestias earum sit. Sunt tenetur hic porro? Ipsa dolor pariatur deleniti fugiat recusandae minus magni porro repudiandae labore necessitatibus temporibus veniam aut maiores nobis soluta deserunt, expedita nemo, ipsum architecto, sapiente eum? Nesciunt porro soluta adipisci in earum eum debitis cupiditate hic incidunt repellendus, ipsum impedit eius. Temporibus, excepturi.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Expertise