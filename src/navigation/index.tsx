import styles from "./navigation.module.scss"

export default function Footer() {
  return (
        <div className={styles.nav}>
          <div className={styles.nav__button}>
            <span className={styles.nav__buttonBar} />
            <a className={styles.nav__buttonText} >Home</a>
          </div>
          <span className={styles.nav__dot}/>
          <div className={styles.nav__button}>
            <span className={styles.nav__buttonBar} />
            <a className={styles.nav__buttonText} >Tech stack</a>
          </div>
          <span className={styles.nav__dot}/>
          <div className={styles.nav__button}>
            <span className={styles.nav__buttonBar} />
            <a className={styles.nav__buttonText} >Projects</a>
          </div>
          <span className={styles.nav__dot}/>
          <div className={styles.nav__button}>
            <span className={styles.nav__buttonBar} />
            <a className={styles.nav__buttonText} >Contact</a>
          </div>
        </div>
  )
}