import * as React from "react"

interface MenuInterace{
  view: number
  setView: any
  page:string
}

const Menu = ({...props}:MenuInterace) => {



  return (
    <div className={"menu menu-"+props.page}>
      <div className="bar-wrapper" onClick={()=>props.setView(0)}>
        <span className="menu-bar"></span>
        <h4 className="bar-text">About me</h4>
      </div>
      <span className="bar-pointer"></span>
      <div className="bar-wrapper" onClick={()=>props.setView(1)}>
        <span className="menu-bar"></span>
        <h4 className="bar-text">Tech</h4>
      </div>
      <span className="bar-pointer"></span>
      <div className="bar-wrapper" onClick={()=>props.setView(2)}>
        <span className="menu-bar"></span>
        <h4 className="bar-text">Projects</h4>
      </div>
      <span className="bar-pointer"></span>
      <div className="bar-wrapper" onClick={()=>props.setView(3)}>
        <span className="menu-bar"></span>
        <h4 className="bar-text">Contact</h4>
      </div>
    </div>
  )
}

export default Menu