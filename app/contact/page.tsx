import styles from "./styles.module.scss"

const Contact = () => {

  return (
    <main className={styles.landingPage}>
      <h2 className={styles.contact__title}>Contact</h2>
      <form name="contact" className={styles.contact}>
        <input type="hidden" name="form-name" value="contact" />
        <label className={styles.contact__fieldWrapper}>
          <input type="email" name="email" id="email" placeholder="yours-email@example.com"/>
        </label>
        <label className={styles.contact__fieldWrapper}>
          <input type="text" name="subject" id="subject" placeholder="Topic" />
        </label>
        <label className={styles.contact__fieldWrapper}>
          <textarea name="message" id="message" rows={7} placeholder="Message" />
        </label>
        <div className={styles.contact__buttonsWrapper}>
          <button type="submit" className={`${styles.contact__button}`}>Send</button>
          <input type="reset" value="Clear" className={styles.contact__button} />
        </div>
      </form>
    </main>
  )
}

export default Contact
