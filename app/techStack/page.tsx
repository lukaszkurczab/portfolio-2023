import * as React from "react"
import TechTile from "../../src/techTile/index"
import styles from "./styles.module.scss"

import gatsby from "../../public/gatsbyjs.png"
import react from "../../public/react.png"
import graphql from "../../public/graphql.png"
import git from "../../public/github.png"
import typescript from "../../public/typescript.png"
import netlify from "../../public/netlify.png"
import sass from "../../public/sass.png"
import styledComponents from "../../public/styled-components.png"

const Tech = () => {

  return (
    <main className={styles.landingPage}>
        <h2 className={styles.tiles__title}>Tech stack</h2>
        <div className={styles.tilesGroup}>
          <h3 className={styles.tilesGroup__title}>Frontend</h3>
          <div className={styles.tilesGroup__tiles}>
            <TechTile src={react} name="React"/>
            <TechTile src={typescript} name="TypeScript"/>
            <TechTile src={sass} name="Sass"/>
            <TechTile src={styledComponents} name="Styled-components"/>
          </div>
        </div>
        <div className={styles.tilesGroup}>
          <h3 className={styles.tilesGroup__title}>Backend</h3>
          <div className={styles.tilesGroup__tiles}>
            <TechTile src={gatsby} name="Gatsbyjs"/>
            <TechTile src={graphql} name="Graphql"/>
            <TechTile src={netlify} name="Netlify"/>
          </div>
        </div>
        <div className={styles.tilesGroup}>
          <h3 className={styles.tilesGroup__title}>Other</h3>
          <div className={styles.tilesGroup__tiles}>
            <TechTile src={git} name="Git"/>
          </div>
        </div>
   </main>
  )
}

export default Tech
