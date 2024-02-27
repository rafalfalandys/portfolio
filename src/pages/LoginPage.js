import Footer from "../components/Footer";
import Header from "../components/Header/Header";

import styles from "./Contact.module.scss";
import LoginForm from "../components/LoginForm";
import { login } from "../helper/firebase";
import useText from "../hooks/use-text";

function LoginPage() {
  const text = useText();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>{text.loginPage.login}</h1>
        <LoginForm />
      </main>
      <Footer />
    </>
  );
}

export default LoginPage;

export async function action({ request }) {
  try {
    const data = await request.formData();

    const email = data.get("email");
    const password = data.get("password");

    login(email, password);

    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}
