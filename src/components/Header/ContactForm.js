import styles from "./ContactForm.module.scss";

function ContactForm() {
  return (
    <form className={styles.form}>
      <label> Name</label>
      <input type="text" />
      <label> E-mail</label>
      <input type="text" />
      <label> Message</label>
      <input type="text" className={styles.msg} />
      <button disabled>Send</button>
    </form>
  );
}

export default ContactForm;
