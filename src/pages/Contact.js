import { Fragment, useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";

import styles from "./Contact.module.scss";
import ContactForm from "../components/ContactForm";
import Phone from "../components/UI/ContactData/Phone";
import Email from "../components/UI/ContactData/Email";
import { URL } from "../config";
import ContextUI from "../store/context-ui";

function Contact() {
  const { isEnglish } = useContext(ContextUI);
  return (
    <Fragment>
      <Header />
      <main className={styles.main}>
        <h1>{isEnglish ? "Get in touch!" : "Masz pytania? Napisz:"}</h1>
        <ContactForm />
        <h2>{isEnglish ? "Or reach me at:" : "Albo odezwij się na:"}</h2>
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

export async function action({ request }) {
  const data = await request.formData();
  const formData = {
    name: data.get("name"),
    contact: data.get("contact"),
    msg: data.get("msg"),
  };

  const response = await fetch(URL + "messages.json", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  if (!response.ok) {
    return {
      msg: "Something went wrong, try again.",
      pl: "Coś poszło nie tak, spróbuj ponownie.",
      ok: response.ok,
    };
  }
  return {
    msg: "Message sent succesfully.",
    pl: "Poszło! Dziękuję za kontakt.",
    ok: response.ok,
  };
}
