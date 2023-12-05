import TechTile from "../../src/TechTile/index"
import styles from "./styles.module.scss"

import react from "../../public/react.png"
import git from "../../public/github.png"
import typescript from "../../public/typescript.png"
import sass from "../../public/sass.png"
import nodejs from "../../public/nodejs.svg"
import csharp from "../../public/csharp.svg"
import sitecore from "../../public/sitecore.png"
import nextjs from "../../public/nextjs.png"
import materialui from "../../public/materialui.svg"

const Tech = () => {

  return (
    <main className={styles.landingPage}>
        <h2 className={styles.tiles__title}>Tech stack</h2>
        <div className={styles.tilesGroup}>
          <h3 className={styles.tilesGroup__title}>Frontend</h3>
          <div className={styles.tilesGroup__tiles}>
            <TechTile src={react} name="React"/>
            <TechTile src={typescript} name="TypeScript"/>
            <TechTile src={nextjs} name="Next.js"/>
            <TechTile src={materialui} name="Material UI"/>
            <TechTile src={sass} name="Sass"/>
          </div>
        </div>
        <div className={styles.tilesGroup}>
          <h3 className={styles.tilesGroup__title}>Backend</h3>
          <div className={styles.tilesGroup__tiles}>
            <TechTile src={nodejs} name="Node.js"/>
            <TechTile src={csharp} name="C#"/>
            <TechTile src={sitecore} name="Sitecore"/>
          </div>
        </div>
        <div className={styles.tilesGroup}>
          <h3 className={styles.tilesGroup__title}>Other</h3>
          <div className={styles.tilesGroup__tiles}>
            <TechTile src={react} name="ReactNative"/>
            <TechTile src={git} name="Git"/>
          </div>
        </div>
   </main>
  )
}

export default Tech
