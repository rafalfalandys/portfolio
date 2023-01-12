import { Fragment } from "react";
import Footer from "../components/UI/Footer";
import Header from "../components/Header/Header";

import styles from "./Contact.module.scss";
import ContactForm from "../components/ContactForm";
import Phone from "../components/UI/ContactData/Phone";
import Email from "../components/UI/ContactData/Email";

function Contact() {
  return (
    <Fragment>
      <Header />
      <main className={styles.main}>
        <h1>Get in touch!</h1>
        <ContactForm />
        <h2>Or reach me at:</h2>
        <div className={styles.contact}>
          <Phone />
          <Email />
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default Contact;
