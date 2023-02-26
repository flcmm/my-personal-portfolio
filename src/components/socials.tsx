import React, { useState } from 'react'

const Socials = () => {
  const [darkmode,setDarkmode] = useState(false)
  const toggletheme = () => {
    darkmode ? setDarkmode(false) : setDarkmode(true)
  }

  const openExternalLink = (source: string) => {
    var githubLink = "https://github.com/flcmm"
    var igLink = "https://www.instagram.com/frln_cm/"
    var linkedinLink = "https://www.linkedin.com/in/froilan-aquino-8249a9192/"
    source === "github" ? window.open(githubLink, "_blank") : (source === "igLink") ? window.open(igLink, "_blank") : window.open(linkedinLink, "_blank")
  }
  return (
    <div className="w-full flex-row flex gap-x-7 justify-end items-start">
      <div className='w-[10%] flex flex-col justify-start' onClick={() => openExternalLink("github")}>
        <svg className='w-full fill-black dark:fill-white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>Github</title>
          <rect width="24" height="24" fill="none"/>
          <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"/>
        </svg>
      </div>
      <div className='w-[10%] flex flex-col justify-start' onClick={() => openExternalLink("igLink")}>
        <svg className='w-full stroke-black dark:stroke-white' viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><path stroke="inherit" strokeWidth="12" d="M96 162c-14.152 0-24.336-.007-32.276-.777-7.849-.761-12.87-2.223-16.877-4.741a36 36 0 0 1-11.33-11.329c-2.517-4.007-3.98-9.028-4.74-16.877C30.007 120.336 30 110.152 30 96c0-14.152.007-24.336.777-32.276.76-7.849 2.223-12.87 4.74-16.877a36 36 0 0 1 11.33-11.33c4.007-2.517 9.028-3.98 16.877-4.74C71.663 30.007 81.847 30 96 30c14.152 0 24.336.007 32.276.777 7.849.76 12.87 2.223 16.877 4.74a36 36 0 0 1 11.329 11.33c2.518 4.007 3.98 9.028 4.741 16.877.77 7.94.777 18.124.777 32.276 0 14.152-.007 24.336-.777 32.276-.761 7.849-2.223 12.87-4.741 16.877a36 36 0 0 1-11.329 11.329c-4.007 2.518-9.028 3.98-16.877 4.741-7.94.77-18.124.777-32.276.777Z"/><circle cx="96" cy="96" r="30" stroke="inherit" strokeWidth="12"/><circle cx="135" cy="57" r="9" fill='none' strokeWidth='5' stroke="inherit"/></svg>
      </div>
      <div className='w-[10%] flex flex-col justify-start' onClick={() => openExternalLink("linkedin")}>
        <svg className='w-full fill-black dark:fill-white' viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>LinkedIn</title>
        <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path>
        </svg>
      </div>
      <div className='w-[10%] flex flex-col justify-start'>
        <svg onClick={toggletheme} className='w-full block dark:hidden' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.67199 18.7967C3.97348 18.2328 4.55832 17.2239 5.45256 17.1452C11.2419 16.6357 15.0596 10.0755 12.4592 5.00063C12.0486 4.19926 12.5832 3.13003 13.4466 3.38559C17.2438 4.50955 20 7.94173 20 12C20 16.9715 16.1189 21 11 21C8.65964 21 6.38082 20.1762 4.67199 18.7967Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg onClick={toggletheme} version="1.1" className="w-full dark:block hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1010 1010" enableBackground="new 0 0 1010 1010">
          <g id="sun-sun">
            <g id="sun-fill">
              <path fill="#FFDB02" d="M826.1182,505c0,177.335-143.7831,321.1006-321.084,321.1006
                C327.7417,826.1006,183.916,682.335,183.916,505c0-177.3184,143.8257-321.1182,321.1182-321.1182
                C682.335,183.8818,826.1182,327.6816,826.1182,505z"/>
            </g>
            <g id="sun-line">
              <g>
                <path fill="#FFDB02" d="M505.0342,833.0557c-180.9146,0-328.0899-147.1671-328.0899-328.0557
                  c0-180.9233,147.1753-328.0903,328.0899-328.0903c180.8896,0,328.039,147.167,328.039,328.0903
                  C833.0732,685.8887,685.9238,833.0557,505.0342,833.0557L505.0342,833.0557z M505.0342,212.9785
                  c-161.0181,0-292.0215,131.0117-292.0215,292.0215c0,160.9922,131.0034,291.9873,292.0215,291.9873
                  c160.9931,0,291.9697-130.9951,291.9697-291.9873C797.0039,343.9902,666.0273,212.9785,505.0342,212.9785L505.0342,212.9785z"/>
              </g>
              <g>
                <g>
                  <polygon fill="#FFDB02" points="1010,523.043 914.5986,523.043 914.5986,486.957 1010,486.957 1010,523.043 				"/>
                </g>
                <g>
                  <polygon fill="#FFDB02" points="95.3936,523.043 0,523.043 0,486.957 95.3936,486.957 95.3936,523.043 				"/>
                </g>
                <g>
                  <polygon fill="#FFDB02" points="524.999,95.3506 488.9385,95.3506 488.9385,0 524.999,0 524.999,95.3506 				"/>
                </g>
                <g>
                  <polygon fill="#FFDB02" points="204.9355,244.8813 138.1455,178.0322 163.6709,152.5234 230.4609,219.373 204.9355,244.8813 
                            "/>
                </g>
                <g>
                  <polygon fill="#FFDB02" points="805.1162,244.8813 779.6074,219.373 846.3711,152.5234 871.8809,178.0322 805.1162,244.8813 
                            "/>
                </g>
                <g>
                  <polygon fill="#FFDB02" points="524.999,1010 488.9385,1010 488.9385,914.6152 524.999,914.6152 524.999,1010 				"/>
                </g>
                <g>
                  <polygon fill="#FFDB02" points="163.6709,857.459 138.1455,831.9512 204.9355,765.1016 230.4609,790.6094 163.6709,857.459 				
                    "/>
                </g>
                <g>
                  <polygon fill="#FFDB02" points="846.3711,857.459 779.6074,790.6094 805.1162,765.1016 871.8809,831.9512 846.3711,857.459 				
                    "/>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  )
}

export default Socials