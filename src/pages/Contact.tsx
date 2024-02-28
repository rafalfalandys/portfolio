import Footer from "../components/Footer";
import Header from "../components/Header/Header";

import styles from "./Contact.module.scss";
import ContactForm from "../components/ContactForm";
import Phone from "../components/UI/ContactData/Phone";
import Email from "../components/UI/ContactData/Email";
import useText from "../hooks/use-text";

const Contact = () => {
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
};

export default Contact;
