import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Socials from './components/socials'
import Logo from "./components/logo"
import Nav from './components/nav'
import Home from './pages/home'
import Services from './pages/services'
import Works from './pages/works'
import NavForLargeSC from './components/navforlargesc'
import Contact from './pages/contact'

function App() {
  return (
      <div className="max-w-full flex flex-col justify-start items-center bg-slate-200 dark:bg-stone-800">
        <div className="pt-6 pb-10  w-11/12 flex flex-row">
          <div className='flex flex-col justify-evenly gap-y-6'>
            <Logo />
            <Nav/>
          </div>
          <NavForLargeSC />
          <Socials />
        </div>

        <div className="w-full">
          <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='/services' element={ <Services /> }/>
            <Route path='/works' element={ <Works /> }/>
            <Route path='/contact' element={ <Contact /> }/>
          </Routes>
        </div>
      </div>
  )
}

export default App
