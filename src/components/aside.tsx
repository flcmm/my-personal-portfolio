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
      <div className="float">
        <h3>WEBDEV/UI</h3>
      </div>
      <div className="greetings">
        <h2>Hello, I'm</h2>
        <h1>&lt; FROILAN /&gt;</h1>
      </div>

      <div className="miniIntroduction">
        <h2><span ref={referenceElement}></span></h2>
        <h2>BASED IN CALOOCAN PHILIPPINES</h2>
      </div>
    </div>
  )
}

export default Aside