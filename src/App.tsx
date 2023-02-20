import React, { createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/navigation'
import Logo from "./components/logo"
import Menu from './components/menu'
import Home from './pages/home'
import Services from './pages/services'
import Works from './pages/works'
import Contact from './pages/contact'

export const AppContext = createContext(null)

function App() {
  return (
      <div className="max-w-full flex flex-col justify-start pt-10 items-center bg-zinc-900">
        <div className="max-w-screen-xl flex flex-row justify-between items-center">
          <Logo />
            <Menu/>
          <Navigation />
        </div>

        <div className="main">
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
