import styles from "./navigation.module.scss"

export default function Footer() {
  return (
        <div className={styles.nav}>
          <button className={styles.nav__button} >Home</button>
          <button className={styles.nav__button} >Tech stack</button>
          <button className={styles.nav__button} >Projects</button>
          <button className={styles.nav__button} >Contact</button>
        </div>
  )
}