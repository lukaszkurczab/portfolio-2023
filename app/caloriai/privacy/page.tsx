import styles from "./styles.module.scss";

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.landingPage}>
      <h2 className={styles.policy__title}>Privacy Policy</h2>

      <section className={styles.policy__section}>
        <p className={styles.policy__text}>
          This Privacy Policy explains how your data is handled by{" "}
          <strong>CaloriAI</strong>, owned and operated by{" "}
          <strong>Łukasz Kurczab</strong>, ul. Wróblewskiego 59, 33-170 Tuchów,
          Poland. For privacy or legal requests, contact:{" "}
          <strong>lukasz.kurczab@gmail.com</strong>.
        </p>
      </section>

      <section className={styles.policy__section}>
        <h3 className={styles.policy__sectionTitle}>1. Data Controller</h3>
        <p className={styles.policy__text}>
          The controller of your personal data is Łukasz Kurczab, ul.
          Wróblewskiego 59, 33-170 Tuchów, Poland, email:
          lukasz.kurczab@gmail.com.
        </p>

        <h3 className={styles.policy__sectionTitle}>2. Data We Collect</h3>
        <ul className={styles.policy__list}>
          <li>Email address</li>
          <li>
            Personal metrics: weight, height, age, gender, and goal (e.g., fat
            loss, muscle gain)
          </li>
          <li>Photos of meals</li>
          <li>History of added meals</li>
          <li>App usage statistics (via Firebase Analytics)</li>
        </ul>

        <h3 className={styles.policy__sectionTitle}>
          3. Legal Basis for Processing
        </h3>
        <p className={styles.policy__text}>
          Your data is processed as necessary to provide and improve the app and
          its services (performance of a contract, Art. 6(1)(b) GDPR), to comply
          with legal obligations, and based on your consent (e.g., use of AI
          features, analytics).
        </p>

        <h3 className={styles.policy__sectionTitle}>4. How We Use Your Data</h3>
        <ul className={styles.policy__list}>
          <li>
            Providing core app functionality (meal logging, nutrition
            calculations, and history).
          </li>
          <li>
            Personalizing your experience and providing AI-based insights.
          </li>
          <li>
            Processing meal photos using AI Vision (OpenAI) to estimate
            nutritional information.
          </li>
          <li>
            Sending relevant data (e.g., weight, height, age, goal, and meal
            history) to ChatGPT-4o for dietary suggestions.
          </li>
          <li>Analyzing app usage with Firebase Analytics.</li>
        </ul>
        <p className={styles.policy__text}>
          Camera access is used only to allow users to take photos of meals for
          nutrition analysis. Photos are not used for identification purposes.
        </p>

        <h3 className={styles.policy__sectionTitle}>
          5. Third-party Data Processors
        </h3>
        <ul className={styles.policy__list}>
          <li>
            <strong>Firebase (Google LLC)</strong> – authentication, database,
            analytics. Data may be processed on servers outside the EEA,
            including the USA. Google uses Standard Contractual Clauses (SCCs)
            for data protection.
          </li>
          <li>
            <strong>OpenAI</strong> – processing of meal photos and dietary data
            for AI-driven features. Data may be processed in the USA. OpenAI
            uses appropriate safeguards for data transfers.
          </li>
        </ul>

        <h3 className={styles.policy__sectionTitle}>
          6. Data Transfers Outside the EEA
        </h3>
        <p className={styles.policy__text}>
          Your personal data may be transferred and processed outside the
          European Economic Area, including the United States, by our service
          providers (e.g., Firebase, OpenAI). We use contractual safeguards
          (such as SCCs) as required by the GDPR.
        </p>

        <h3 className={styles.policy__sectionTitle}>7. Data Retention</h3>
        <p className={styles.policy__text}>
          Your data is stored only as long as necessary to provide the service
          or until you delete your account. You can delete your account and all
          personal data at any time from within the app; this action is
          immediate and irreversible.
        </p>

        <h3 className={styles.policy__sectionTitle}>8. Your Rights</h3>
        <p className={styles.policy__text}>
          You have the right to: access your data, correct inaccurate data,
          delete your data, restrict or object to processing, request data
          portability, withdraw consent at any time, and file a complaint with
          the relevant data protection authority. To exercise your rights,
          contact lukasz.kurczab@gmail.com or use the app’s data deletion
          feature.
        </p>

        <h3 className={styles.policy__sectionTitle}>9. User Content</h3>
        <p className={styles.policy__text}>
          Photos of meals are treated as user-generated content. By uploading
          them, you grant CaloriAI permission to process them to provide app
          features (e.g., AI Vision, dietary analysis).
        </p>

        <h3 className={styles.policy__sectionTitle}>
          10. AI and Model Training
        </h3>
        <p className={styles.policy__text}>
          Data sent to AI service providers is used only to provide the features
          you request (such as meal photo analysis and personalized suggestions)
          and is not used by CaloriAI to train its own models.
        </p>

        <h3 className={styles.policy__sectionTitle}>11. Analytics & Cookies</h3>
        <p className={styles.policy__text}>
          The app uses Firebase Analytics to collect usage statistics to improve
          functionality and user experience. No cookies are used.
        </p>

        <h3 className={styles.policy__sectionTitle}>
          12. No Third-party Advertising
        </h3>
        <p className={styles.policy__text}>
          This app does not contain third-party advertising and does not use
          data for ad targeting.
        </p>

        <h3 className={styles.policy__sectionTitle}>13. No Social Features</h3>
        <p className={styles.policy__text}>
          The app does not include any community or social networking features.
        </p>

        <h3 className={styles.policy__sectionTitle}>
          14. Limitation of Liability
        </h3>
        <p className={styles.policy__text}>
          Information and suggestions provided by the app or its AI features are
          for informational purposes only and should not be treated as medical
          advice. CaloriAI and Łukasz Kurczab are not responsible for any health
          consequences resulting from reliance on the app’s content or AI
          suggestions.
        </p>

        <h3 className={styles.policy__sectionTitle}>15. Minimum Age</h3>
        <p className={styles.policy__text}>
          You must be at least 16 years old to use this app. If you are under
          16, you must have permission from your parent or legal guardian.
        </p>

        <h3 className={styles.policy__sectionTitle}>
          16. Changes to this Policy
        </h3>
        <p className={styles.policy__text}>
          We may update this Privacy Policy. Continued use of the app after
          changes means you accept the updated terms.
        </p>

        <h3 className={styles.policy__sectionTitle}>
          17. Governing Law & Jurisdiction
        </h3>
        <p className={styles.policy__text}>
          This Privacy Policy is governed by Polish law. Any disputes will be
          resolved by the courts of Kraków, Poland.
        </p>

        <h3 className={styles.policy__sectionTitle}>18. Contact</h3>
        <p className={styles.policy__text}>
          If you have questions or wish to exercise your data rights, contact:
          lukasz.kurczab@gmail.com.
        </p>

        <p className={styles.policy__text}>
          <em>Last updated: 2025-12-13</em>
        </p>
      </section>
    </main>
  );
}
