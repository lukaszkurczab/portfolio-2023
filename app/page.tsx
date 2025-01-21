import styles from "./styles.module.scss";

export default function Page() {
  return (
    <main className={styles.landingPage}>
      <h1>
        <span className={styles.name}>Łukasz</span>Kurczab
      </h1>
      <h2>
        Software <br />
        developer
      </h2>
    </main>
  );
}
