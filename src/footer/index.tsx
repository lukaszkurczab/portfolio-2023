import Image from "next/image";

import facebook from "../../public/facebook.png";
import linkedin from "../../public/linkedin.png";
import github from "../../public/github.svg";

import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://www.facebook.com/kurczab.lukasz/"
        className={styles.footer__link}
      >
        <Image src={facebook} alt="" className={styles.footer__linkIcon} />
      </a>
      <a
        href="https://github.com/lukaszkurczab"
        className={styles.footer__link}
      >
        <Image src={github} alt="" className={styles.footer__linkIcon} />
      </a>
      <a
        href="https://www.linkedin.com/in/lukaszkurczab/"
        className={styles.footer__link}
      >
        <Image src={linkedin} alt="" className={styles.footer__linkIcon} />
      </a>
    </footer>
  );
}
