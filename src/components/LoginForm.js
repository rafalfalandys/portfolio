import { useContext } from "react";
import { useEffect, useState } from "react";
import { Form, Link, useActionData, useNavigation } from "react-router-dom";
import useInput from "../hooks/use-input";
import ContextUI from "../store/context-ui";
import styles from "./LoginForm.module.scss";
import Spinner from "./UI/Spinner";
import useFirebase from "../hooks/use-firebase";

function LoginForm() {
  const { isEnglish } = useContext(ContextUI);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const navigation = useNavigation();
  const actionData = useActionData();
  const { signOut, user } = useFirebase();

  const isSubmitting = navigation.state === "submitting";

  const {
    value: email,
    isValueValid: isEnteredContactValid,
    isAllValid: isContactValid,
    onChangeHandler: changeContactHandler,
    onblurHandler: blurContactHandler,
    reset: resetContact,
  } = useInput();

  const {
    value: password,
    isValueValid: isEnteredPasswordValid,
    isAllValid: isPasswordValid,
    onChangeHandler: changePasswordHandler,
    onblurHandler: blurPasswordHandler,
    reset: resetPassword,
  } = useInput();

  useEffect(() => {
    setIsFormValid(isEnteredContactValid && isEnteredPasswordValid);
  }, [isEnteredContactValid, isEnteredPasswordValid]);

  const setLoadState = () => {
    setIsLoad(true);

    setTimeout(() => {
      setIsLoad(false);
    }, 3000);
  };

  useEffect(() => {
    if (!actionData) return;
    if (actionData.ok) {
      resetContact();
      resetPassword();
    }
    setLoadState();
  }, [actionData, resetContact, resetPassword]);

  return (
    <Form method="post" className={styles.form}>
      <label>{`${isEnglish ? "E-mail" : "E-mail"}`}</label>
      <input
        type="text"
        name="email"
        value={email}
        onChange={changeContactHandler}
        onBlur={blurContactHandler}
        className={
          isContactValid ? styles.input : `${styles.input} ${styles.error}`
        }
      />
      <label>{`${isEnglish ? "Password" : "Hasło"}`}</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={changePasswordHandler}
        onBlur={blurPasswordHandler}
        className={
          isPasswordValid
            ? `${styles.password} ${styles.input}`
            : `${styles.password} ${styles.input} ${styles.error}`
        }
      />
      <div className={styles.btns}>
        {(!isContactValid || !isPasswordValid) && (
          <p className={styles.error}>
            {isEnglish && <span>Please enter all data</span>}
            {!isEnglish && <span>Uzupełnij wszystkie pola</span>}
          </p>
        )}
        {isFormValid && !isSubmitting && !isLoad && (
          <button>{isEnglish ? "Login" : "Zaloguj"}</button>
        )}
        {isSubmitting && <Spinner />}
        {user && (
          <button type="button" onClick={signOut}>
            {isEnglish ? "Logout" : "Wyloguj"}
          </button>
        )}
        {user && (
          <Link to="/edit">
            <button type="button">
              {isEnglish ? "Edit Panel" : "Panel Edycji"}
            </button>
          </Link>
        )}
        <p>
          {isLoad &&
            actionData?.ok &&
            (isEnglish ? actionData?.password : actionData?.pl)}
        </p>
        <p className={styles.error}>
          <span>
            {isLoad &&
              !actionData.ok &&
              (isEnglish ? actionData.password : actionData?.pl)}
          </span>
        </p>
      </div>
    </Form>
  );
}

export default LoginForm;
