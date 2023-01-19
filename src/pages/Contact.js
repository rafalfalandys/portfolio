import { Fragment, useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";

import styles from "./Contact.module.scss";
import ContactForm from "../components/ContactForm";
import Phone from "../components/UI/ContactData/Phone";
import Email from "../components/UI/ContactData/Email";
import Context from "../store/context";

function Contact() {
  const ctx = useContext(Context);
  return (
    <Fragment>
      <Header />
      <main className={styles.main}>
        <h1>{ctx.isEnglish ? "Get in touch!" : "Napisz!"}</h1>
        <ContactForm />
        <h2>{ctx.isEnglish ? "Or reach me at:" : "Albo odezwij się na:"}</h2>
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
