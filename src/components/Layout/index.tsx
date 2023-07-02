import * as React from "react"
import Particles from 'react-particles-js';
import logo from "../../assets/logo.png"
import facebook from "../../assets/facebook.png"
import bitbucket from "../../assets/bitbucket.png"
import linkedin from "../../assets/linkedin.png"
import Menu from "../Menu"

interface LayoutInterace{
  children: JSX.Element
  view: number
  setView: any
  page:string
}

const isBrowser = typeof window !== "undefined"

const Layout = ({...props}:LayoutInterace) => {
  const [dots, setDots] = React.useState(isBrowser ? Math.round(window.innerWidth/10) : 100)

  React.useEffect((): any => {
    function handleResize() {
      setDots(isBrowser ? Math.round(window.innerWidth/10) : 100)
      console.log(dots)
    }

    isBrowser ? (window.addEventListener('resize', handleResize)) : null

    return () => {
      isBrowser ? (window.removeEventListener('resize', handleResize)) : null
    }
  })

  return (
    <div className="layout">
      <Particles
        height="100vh"
         params={{
          "particles": {
            "number": {
              "value": dots
            },
            "move":{
              "speed": 1.3
            }
          }
        }}
      />
      <img src={logo} alt="" className="layout__logo" />
      <Menu view={props.view} setView={props.setView} page={props.page}/>
      <div className="page-wrapper">
        {props.children}
      </div>
      <div className="layout__links">
        <a href="https://www.facebook.com/kurczab.lukasz/" className="link">
          <img src={facebook} alt="" className="link__icon" />
        </a>
        <a href="https://bitbucket.org/lukaszkurczab/" className="link">
          <img src={bitbucket} alt="" className="link__icon" />
        </a>
        <a href="https://www.linkedin.com/in/lukaszkurczab/" className="link">
          <img src={linkedin} alt="" className="link__icon" />
        </a>
      </div>
    </div>
  )
}

export default Layout
