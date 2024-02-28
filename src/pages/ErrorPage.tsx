import Footer from "../components/Footer";
import styles from "./ErrorPage.module.scss";
import Header from "../components/Header/Header";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const errorObj = useRouteError() as { status: number; data: { message: string } };

  let msg = "Something went wrong";

  if (errorObj.status === 500) msg = errorObj.data.message;
  console.log(errorObj);
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>ERROR!</h1>
        <h2>{`${msg} (status code - ${errorObj.status})`}</h2>
      </main>
      <Footer />
    </>
  );
}

export default ErrorPage;
