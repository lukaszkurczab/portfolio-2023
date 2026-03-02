import Link from "next/link";
import styles from "./styles.module.scss";

export default function SupportPage() {
  return (
    <main className={styles.landingPage}>
      <h2 className={styles.support__title}>Fitaly Support</h2>

      <section className={styles.support__section}>
        <h3 className={styles.support__sectionTitle}>Fitaly</h3>
        <p className={styles.support__text}>
          Fitaly is an internal utility application currently in limited early
          release. It provides access to a set of basic tools used for testing
          core workflows, data handling, and interface behavior.
        </p>
        <p className={styles.support__text}>
          If you have been invited to try this build and need assistance, please
          use the contact information below.
        </p>
      </section>

      <section className={styles.support__section}>
        <h3 className={styles.support__sectionTitle}>Contact</h3>
        <p className={styles.support__text}>
          For support, feedback or bug reports, contact:
        </p>
        <a
          href="mailto:lukasz.kurczab@gmail.com"
          className={styles.support__link}
        >
          lukasz.kurczab@gmail.com
        </a>
      </section>

      <section className={styles.support__section}>
        <h3 className={styles.support__sectionTitle}>Privacy Policy</h3>
        <p className={styles.support__text}>
          You can view the full privacy policy here:
        </p>
        <Link href="/fitaly/privacy" className={styles.support__link}>
          View Privacy Policy
        </Link>
      </section>
    </main>
  );
}
