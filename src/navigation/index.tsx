import Link from 'next/link'
import {usePathname} from 'next/navigation';

import styles from "./navigation.module.scss"

export default function Navigation() {
  const pathname = usePathname()

  return (
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
  )
}