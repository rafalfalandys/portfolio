import { Fragment } from "react";
import Footer from "../components/UI/Footer";
import Header from "../components/Header/Header";

import styles from "./Contact.module.scss";
import ContactForm from "../components/Header/ContactForm";
import ContactData from "../components/UI/ContactData";

function Contact() {
  return (
    <Fragment>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Get in touch!</h1>
        <ContactForm />
        <h1 className={styles.title}>Or reach me at:</h1>
        <ContactData height="3.5rem" />
      </main>
      <Footer />
    </Fragment>
  );
}

export default Contact;
