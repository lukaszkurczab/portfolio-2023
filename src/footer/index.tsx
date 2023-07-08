import Image from 'next/image';

import facebook from "../../public/facebook.png"
import bitbucket from "../../public/bitbucket.png"
import linkedin from "../../public/linkedin.png"

import styles from "./footer.module.scss"

export default function Footer() {
  return (
        <footer className={styles.footer}>
          <a href="https://www.facebook.com/kurczab.lukasz/" className={styles.footer__link}>
            <Image src={facebook} alt="" className={styles.footer__linkIcon} />
          </a>
          <a href="https://bitbucket.org/lukaszkurczab/" className={styles.footer__link}>
            <Image src={bitbucket} alt="" className={styles.footer__linkIcon} />
          </a>
          <a href="https://www.linkedin.com/in/lukaszkurczab/" className={styles.footer__link}>
            <Image src={linkedin} alt="" className={styles.footer__linkIcon} />
          </a>
        </footer>
  )
}