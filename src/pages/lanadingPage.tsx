import * as React from "react"

interface ContactInterace{
  displayPage: boolean
}

const LandingPage = ({displayPage}:ContactInterace) => {
  return (
    <main 
      className="page-container landingPage"
      style={{
        display:`${displayPage ? 'flex' : 'none'}`
        }}
    >
      <h1><span className="name">Łukasz</span>Kurczab</h1>
      <h2>
        Front-end <br/> 
        developer
      </h2>
   </main>
  )
}

export default LandingPage
