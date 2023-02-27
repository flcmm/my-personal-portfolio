import React from 'react'

const Footer = () => {
  const openExternalLinkFooter = (source: string) => {
    var githubLink = "https://github.com/flcmm"
    var igLink = "https://www.instagram.com/frln_cm/"
    var linkedinLink = "https://www.linkedin.com/in/froilan-aquino-8249a9192/"
    source === "github" ? window.open(githubLink, "_blank") : (source === "igLink") ? window.open(igLink, "_blank") : window.open(linkedinLink, "_blank")
  }
  return (
    <div className="px-[3%] py-3 w-full flex flex-row justify-between text-center items-center bg-slate-200 dark:bg-stone-800">
      <h1 className='text-black dark:text-white font-semibold'>Froilan.</h1>

      <div className="flex justify-start flex-row items-center gap-2 w-1/4">
        <svg onClick={() => openExternalLinkFooter('github')} className='w-1/4 fill-black dark:fill-white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>Github</title>
          <rect width="24" height="24" fill="none"/>
          <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"/>
        </svg>
        <svg onClick={() => openExternalLinkFooter('igLink')} className='w-1/4 stroke-black dark:stroke-white' viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
          <path stroke="inherit" strokeWidth="12" d="M96 162c-14.152 0-24.336-.007-32.276-.777-7.849-.761-12.87-2.223-16.877-4.741a36 36 0 0 1-11.33-11.329c-2.517-4.007-3.98-9.028-4.74-16.877C30.007 120.336 30 110.152 30 96c0-14.152.007-24.336.777-32.276.76-7.849 2.223-12.87 4.74-16.877a36 36 0 0 1 11.33-11.33c4.007-2.517 9.028-3.98 16.877-4.74C71.663 30.007 81.847 30 96 30c14.152 0 24.336.007 32.276.777 7.849.76 12.87 2.223 16.877 4.74a36 36 0 0 1 11.329 11.33c2.518 4.007 3.98 9.028 4.741 16.877.77 7.94.777 18.124.777 32.276 0 14.152-.007 24.336-.777 32.276-.761 7.849-2.223 12.87-4.741 16.877a36 36 0 0 1-11.329 11.329c-4.007 2.518-9.028 3.98-16.877 4.741-7.94.77-18.124.777-32.276.777Z"/>
          <circle cx="96" cy="96" r="30" stroke="inherit" strokeWidth="12"/>
          <circle cx="135" cy="57" r="9" fill='none' strokeWidth='5' stroke="inherit"/>
        </svg>
        <svg onClick={() => openExternalLinkFooter('linkedinLink')} className='w-1/4 fill-black dark:fill-white' viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <title>LinkedIn</title>
          <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z">
          </path>
        </svg>
      </div>

    </div>
  )
}

export default Footer