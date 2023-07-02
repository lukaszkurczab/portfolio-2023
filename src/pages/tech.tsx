import * as React from "react"
import TechTile from "../components/TechTile"

import gatsby from "../assets/gatsbyjs.png"
import react from "../assets/react.png"
import graphql from "../assets/graphql.png"
import git from "../assets/github.png"
import typescript from "../assets/typescript.png"
// import flexbox from "../assets/flexbox.png"
import netlify from "../assets/netlify.png"
import sass from "../assets/sass.png"
import styledComponents from "../assets/styled-components.png"

interface ContactInterace{
  displayPage: boolean
}

const Tech = ({displayPage}:ContactInterace) => {

  return (
    <main className="page-container"
    style={{
      display:`${displayPage ? 'block' : 'none'}`, 
      // transform:`${displayPage ? 'translateY(100vh)' : 'none'}`
      }}>
        <h2 className="tiles__title">Tech stack</h2>
        <div className="tiles-wrapper">
          <TechTile src={react} name="React"/>
          <TechTile src={typescript} name="TypeScript"/>
          {/* <TechTile src={flexbox} name="Css"/> */}
          <TechTile src={sass} name="Sass"/>
          <TechTile src={gatsby} name="Gatsbyjs"/>
          <TechTile src={graphql} name="Graphql"/>
          <TechTile src={styledComponents} name="Styled-components"/>
          <TechTile src={netlify} name="Netlify"/>
          <TechTile src={git} name="Git"/>
        </div>
   </main>
  )
}

export default Tech
