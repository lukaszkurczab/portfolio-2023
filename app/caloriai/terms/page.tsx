import styles from "./styles.module.scss";

export default function TermsPage() {
  return (
    <main className={styles.landingPage}>
      <h2 className={styles.policy__title}>Terms of Service</h2>

      <section className={styles.policy__section}>
        <p className={styles.policy__text}>
          These Terms of Service govern the use of the <strong>CaloriAI</strong>{" "}
          application, owned and operated by <strong>Łukasz Kurczab</strong>,
          ul. Wróblewskiego 59, 33-170 Tuchów, Poland. For legal inquiries,
          contact: <strong>lukasz.kurczab@gmail.com</strong>.
        </p>
      </section>

      <section className={styles.policy__section}>
        <h3 className={styles.policy__sectionTitle}>1. General Provisions</h3>
        <p className={styles.policy__text}>
          By accessing or using the CaloriAI app, you agree to be bound by these
          Terms of Service and the Privacy Policy. These terms apply to all
          users of the app.
        </p>

        <h3 className={styles.policy__sectionTitle}>2. Age Requirement</h3>
        <p className={styles.policy__text}>
          You must be at least 16 years old to use this app. If you are under
          16, you may only use the app with the consent of your parent or legal
          guardian.
        </p>

        <h3 className={styles.policy__sectionTitle}>3. User Account</h3>
        <ul className={styles.policy__list}>
          <li>
            You agree to provide accurate, current, and complete information
            during registration.
          </li>
          <li>
            You are responsible for maintaining the confidentiality of your
            login credentials.
          </li>
          <li>
            You may delete your account and all associated data at any time
            directly from within the app.
          </li>
        </ul>

        <h3 className={styles.policy__sectionTitle}>
          4. Scope and Nature of the Service
        </h3>
        <p className={styles.policy__text}>
          CaloriAI is a nutrition tracking application designed to help users
          log meals, analyze dietary data, and monitor progress. Some features
          may use artificial intelligence to generate insights and suggestions.
        </p>

        <h3 className={styles.policy__sectionTitle}>5. User Content</h3>
        <p className={styles.policy__text}>
          You may upload personal data and content, including meal photos and
          nutrition information. You retain ownership of your content but grant
          CaloriAI permission to process it solely for the purpose of providing
          app features (e.g., AI analysis, statistics).
        </p>

        <h3 className={styles.policy__sectionTitle}>6. Third-party Services</h3>
        <p className={styles.policy__text}>
          The app uses third-party services such as Firebase (Google LLC) and
          OpenAI to provide authentication, data storage, analytics, and
          AI-based features. Some data may be processed outside the European
          Economic Area with appropriate legal safeguards.
        </p>

        <h3 className={styles.policy__sectionTitle}>
          7. Subscriptions and Payments
        </h3>
        <p className={styles.policy__text}>
          CaloriAI may offer premium features through auto-renewable
          subscriptions. Subscriptions are managed by the Apple App Store or
          Google Play and are subject to their terms. You can manage or cancel
          your subscription at any time through your platform account settings.
        </p>

        <h3 className={styles.policy__sectionTitle}>8. No Medical Advice</h3>
        <p className={styles.policy__text}>
          All information, analyses, and suggestions provided by the app,
          including AI-generated content, are for informational purposes only
          and do not constitute medical or dietary advice.
        </p>

        <h3 className={styles.policy__sectionTitle}>
          9. Limitation of Liability
        </h3>
        <p className={styles.policy__text}>
          The app owner is not responsible for health decisions made based on
          the app’s content or for any consequences resulting from reliance on
          such information.
        </p>

        <h3 className={styles.policy__sectionTitle}>
          10. Service Availability
        </h3>
        <p className={styles.policy__text}>
          While we strive to ensure reliable operation of the app, we do not
          guarantee uninterrupted availability or error-free performance.
        </p>

        <h3 className={styles.policy__sectionTitle}>
          11. Changes to the Terms
        </h3>
        <p className={styles.policy__text}>
          These Terms of Service may be updated from time to time. Continued use
          of the app after changes means you accept the updated terms.
        </p>

        <h3 className={styles.policy__sectionTitle}>
          12. Governing Law and Jurisdiction
        </h3>
        <p className={styles.policy__text}>
          These Terms are governed by Polish law. Any disputes shall be resolved
          by the courts of Kraków, Poland.
        </p>

        <h3 className={styles.policy__sectionTitle}>13. Contact</h3>
        <p className={styles.policy__text}>
          If you have any questions regarding these Terms, contact:
          lukasz.kurczab@gmail.com.
        </p>

        <p className={styles.policy__text}>
          <em>Last updated: 2025-12-13</em>
        </p>
      </section>
    </main>
  );
}
