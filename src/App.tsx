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
            <Route path='/about' element={ <About /> }/>
            <Route path='/expertise' element={ <Expertise /> }/>
            <Route path='/projects' element={ <Projects /> }/>
            <Route path='/contact' element={ <Contact /> }/>
            <Route path='/*' element={ <NotFound /> }/>
          </Routes>
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
  )
}

export default App