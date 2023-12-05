import { StaticImageData } from "next/image";
import Image from 'next/image';
import * as React from "react"

import styles from "./styles.module.scss"

interface Props{
  src: StaticImageData;
  name: string;
}

const TechTile = ({src, name}:Props) => {
  return (
        <div className={styles.tile}>
          <div className={styles.tileContent}>
            <div className={styles.tileImgWrapper}> 
              <Image src={src} alt="" className={styles.tileImg} />
            </div>
            <h3 className={styles.tileText}>{name}</h3>
          </div>
        </div>
  )
}

export default TechTile
