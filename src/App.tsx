import { Routes, Route } from 'react-router-dom'
import Socials from './components/socials'
import Logo from "./components/logo"
import Nav from './components/nav'
import About from './pages/about'
import Expertise from './pages/expertise'
import Home from './pages/home'
import Projects from './pages/projects'
import NavForLargeSC from './components/navforlargesc'
import Contact from './pages/contact'
import CTA4Mobile from './components/cta4small'
import Footer from './components/footers'
import NotFound from './pages/404'

function App() {
  return (
      <div className="max-w-full flex flex-col gap-5 justify-start items-center bg-slate-200 dark:bg-stone-800">
        <div className="pt-6 pb-10 max-w-screen-lg w-11/12 grid md:flex md:flex-row md:justify-between grid-cols-2 gap-y-2 grid-rows-2">
          <Logo />
          <NavForLargeSC />
          <Socials />
          <Nav/>
          <CTA4Mobile />
        </div>

        <div className="max-w-screen-lg w-full">
          <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='/about' element={ <About /> }/>
            <Route path='/expertise' element={ <Expertise /> }/>
            <Route path='/projects' element={ <Projects /> }/>
            <Route path='/contact' element={ <Contact /> }/>
            <Route path='*' element={ <NotFound /> }/>
          </Routes>
        </div>
        <div className="max-w-screen-lg">
          <Footer />
        </div>
      </div>
  )
}

export default App