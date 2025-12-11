import styles from "./styles.module.scss";

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.landingPage}>
      <h2 className={styles.policy__title}>Privacy Policy</h2>

      <section className={styles.policy__section}>
        <p className={styles.policy__text}>
          This Privacy Policy explains how your data is handled by{" "}
          <strong>CaloriAI</strong>, owned by <strong>Łukasz Kurczab</strong>.
        </p>
      </section>

      <section className={styles.policy__section}>
        <h3 className={styles.policy__sectionTitle}>1. Data We Collect</h3>
        <ul className={styles.policy__list}>
          <li>Email address</li>
          <li>
            Personal metrics: weight, height, age, gender, and goal (e.g., fat
            loss, muscle gain)
          </li>
          <li>Photos of meals</li>
          <li>History of added meals</li>
        </ul>
        <h3 className={styles.policy__sectionTitle}>2. Use of Data</h3>
        <p className={styles.policy__text}>
          Your data is used to personalize your experience and provide AI-based
          insights.
        </p>
        <p className={styles.policy__text}>
          Meal photos are processed using AI Vision.
        </p>
        <p className={styles.policy__text}>
          Some health data (such as weight, height, age, goal, and meal history)
          is shared with ChatGPT-4o for personalized suggestions.
        </p>
        <h3 className={styles.policy__sectionTitle}>
          3. Data Transfer Outside the EU
        </h3>
        <p className={styles.policy__text}>
          Data may be transferred outside the EEA (for example, to OpenAI in the
          USA) for processing.
        </p>
        <h3 className={styles.policy__sectionTitle}>4. Data Deletion</h3>
        <p className={styles.policy__text}>
          You can delete your account and all associated data at any time using
          the in-app option.
        </p>
        <h3 className={styles.policy__sectionTitle}>5. User Content</h3>
        <p className={styles.policy__text}>
          Photos of meals are treated as user-generated content.
        </p>
        <h3 className={styles.policy__sectionTitle}>6. Advertising</h3>
        <p className={styles.policy__text}>
          This app does not contain third-party advertising.
        </p>
        <h3 className={styles.policy__sectionTitle}>7. Social Features</h3>
        <p className={styles.policy__text}>
          The app does not include any community or social networking features.
        </p>
        <h3 className={styles.policy__sectionTitle}>
          8. Changes to this Policy
        </h3>
        <p className={styles.policy__text}>
          We may update this policy. Continued use of the app indicates
          acceptance of the new terms.
        </p>
      </section>
    </main>
  );
}
