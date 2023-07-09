import styles from "./navigation.module.scss"

interface Props {
  page: string;
}

export default function Navigation({page}: Props) {
  return (
        <div className={styles.nav}>
          <button className={`${styles.nav__button} ${styles.active}`}>
            <span className={styles.nav__buttonBar} />
            <a className={styles.nav__buttonText} >Home</a>
          </button>
          <span className={styles.nav__dot}/>
          <button className={styles.nav__button}>
            <span className={styles.nav__buttonBar} />
            <a className={styles.nav__buttonText} >Tech stack</a>
          </button>
          <span className={styles.nav__dot}/>
          <button className={styles.nav__button}>
            <span className={styles.nav__buttonBar} />
            <a className={styles.nav__buttonText} >Experience</a>
          </button>
          <span className={styles.nav__dot}/>
          <button className={styles.nav__button}>
            <span className={styles.nav__buttonBar} />
            <a className={styles.nav__buttonText} >Contact</a>
          </button>
        </div>
  )
}