import Link from 'next/link'
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import menu from "../../public/menu.png"

import styles from "./navigation.module.scss"
import { useState } from 'react';

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false)
  const pathname = usePathname()



  return (
    <>
        <div className={styles.nav}>
          <Link
            href={"/"}
            className={`${styles.nav__button} ${pathname === "/" ? styles.active : ""}`}
          >
            <span className={styles.nav__buttonBar} />
            <span className={styles.nav__buttonText} >Home</span>
          </Link>
          <span className={styles.nav__dot}/>
          <Link
            href={"/techStack"}
            className={`${styles.nav__button} ${pathname === "/techStack" ? styles.active : ""}`}
          >
            <span className={styles.nav__buttonBar} />
            <span className={styles.nav__buttonText} >Tech stack</span>
          </Link>
          <span className={styles.nav__dot}/>
          <Link
            href={"/experience"}
            className={`${styles.nav__button} ${pathname === "/experience" ? styles.active : ""}`}
          >
            <span className={styles.nav__buttonBar} />
            <span className={styles.nav__buttonText} >Experience</span>
          </Link>
          <span className={styles.nav__dot}/>
          <Link
            href={"/contact"}
            className={`${styles.nav__button} ${pathname === "/contact" ? styles.active : ""}`}
          >
            <span className={styles.nav__buttonBar} />
            <span className={styles.nav__buttonText} >Contact</span>
          </Link>
        </div>
        <div className={styles.navMobile}>
          <button className={styles.navMobile__buttonsIcon_wrapper} onClick={() => setShowMenu(!showMenu)}>
            <Image src={menu} alt="" />
          </button>
          {showMenu && <div className={styles.navMobile__buttonsWrapper}>
            <Link
              href={"/"}
              className={`${styles.navMobile__button} ${pathname === "/" ? styles.active : ""}`}
            >
              <span className={styles.navMobile__buttonText} >Home</span>
            </Link>
            <Link
              href={"/techStack"}
              className={`${styles.navMobile__button} ${pathname === "/techStack" ? styles.active : ""}`}
            >
              <span className={styles.navMobile__buttonText} >Tech stack</span>
            </Link>
            <Link
              href={"/experience"}
              className={`${styles.navMobile__button} ${pathname === "/experience" ? styles.active : ""}`}
            >
              <span className={styles.navMobile__buttonText} >Experience</span>
            </Link>
            <Link
              href={"/contact"}
              className={`${styles.navMobile__button} ${pathname === "/contact" ? styles.active : ""}`}
            >
              <span className={styles.navMobile__buttonText} >Contact</span>
            </Link>
          </div>}
      </div>
    </>
  )
}