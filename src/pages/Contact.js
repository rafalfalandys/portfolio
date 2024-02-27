import Footer from "../components/Footer";
import Header from "../components/Header/Header";

import styles from "./Contact.module.scss";
import ContactForm from "../components/ContactForm";
import Phone from "../components/UI/ContactData/Phone";
import Email from "../components/UI/ContactData/Email";
import { URL } from "../config";
import useText from "../hooks/use-text";
import { textsEN, textsPL } from "../assets/texts";

function Contact() {
  const text = useText();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>{text.contactPage.textMe}</h1>
        <ContactForm />
        <h2>{text.contactPage.reachMeAt}</h2>
        <div className={styles.contact}>
          <Phone />
          <Email />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Contact;

export async function action({ request }) {
  const data = await request.formData();

  // generating date
  const now = new Date();
  const date = new Intl.DateTimeFormat("pl-PL", {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "numeric",
    year: "numeric",
    weekday: "long",
  }).format(now);

  const formData = {
    name: data.get("name"),
    contact: data.get("contact"),
    msg: data.get("msg"),
    date,
  };

  const response = await fetch(URL + "messages.json", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  if (!response.ok) {
    return {
      msg: textsEN.contactPage.actionError,
      pl: textsPL.contactPage.actionError,
      ok: response.ok,
    };
  }
  return {
    msg: textsEN.contactPage.actionOk,
    pl: textsPL.contactPage.actionOk,
    ok: response.ok,
  };
}
