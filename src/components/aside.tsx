import React, { useEffect, useRef } from "react"
import Typed from 'typed.js'

const Aside = () => {
  const referenceElement = useRef(null)

  useEffect(() => {
    const instanceOfType = new Typed(referenceElement.current, {
      strings: ['Developer', 'React Developer', 'UI Designer', 'Web Designer', 'Web Developer'],
      backSpeed: 100,
      typeSpeed: 100,
      loop: true,
      startDelay: 300,
      backDelay: 500
    })

    return () => {
      instanceOfType.destroy()
    }
  }, [])

  return (
    <div className="asideCompContainer">
      <div className="greetings">
        <h2 className="dark:text-white font-regular">Hello, I'm</h2>
        <h1 className="font-bold dark:text-white text-2xl">&lt; FROILAN /&gt;</h1>
      </div>

      <div className="miniIntroduction">
        <h2><span className="dark:text-white" ref={referenceElement}></span></h2>
        <h2 className="dark:text-white">BASED IN CALOOCAN PHILIPPINES</h2>
      </div>
    </div>
  )
}

export default Aside