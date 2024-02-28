import { useContext } from "react";
import { useEffect, useState } from "react";
import { Form, useActionData, useNavigation } from "react-router-dom";
import useInput from "../hooks/use-input";
import ContextUI from "../store/context-ui";
import styles from "./ContactForm.module.scss";
import Spinner from "./UI/Spinner";
import useFirebase from "../hooks/use-firebase";
import useText from "../hooks/use-text";

const ContactForm = () => {
  const { isEnglish } = useContext(ContextUI);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const navigation = useNavigation();
  const actionData = useActionData() as { msg: string; pl: string; ok: boolean };
  const { user } = useFirebase();
  const text = useText();

  const isSubmitting = navigation.state === "submitting";

  const {
    value: name,
    isValueValid: isEnteredNameValid,
    isAllValid: isNameValid,
    onChangeHandler: changeNameHandler,
    onblurHandler: blurNameHandler,
    reset: resetName,
  } = useInput();

  const {
    value: contact,
    isValueValid: isEnteredContactValid,
    isAllValid: isContactValid,
    onChangeHandler: changeContactHandler,
    onblurHandler: blurContactHandler,
    reset: resetContact,
  } = useInput();

  const {
    value: msg,
    isValueValid: isEnteredMsgValid,
    isAllValid: isMsgValid,
    onChangeHandler: changeMsgHandler,
    onblurHandler: blurMsgHandler,
    reset: resetMsg,
  } = useInput();

  useEffect(() => {
    setIsFormValid(isEnteredNameValid && isEnteredContactValid && isEnteredMsgValid);
  }, [isEnteredNameValid, isEnteredContactValid, isEnteredMsgValid]);

  const setLoadState = () => {
    setIsLoad(true);

    setTimeout(() => {
      setIsLoad(false);
    }, 3000);
  };

  useEffect(() => {
    if (!actionData) return;
    if (actionData.ok) {
      resetName();
      resetContact();
      resetMsg();
    }
    setLoadState();
  }, [actionData, resetContact, resetMsg, resetName]);

  return (
    <Form method="post" className={styles.form}>
      <label>{`${isEnglish ? "Name" : "Imię"}`}</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={changeNameHandler}
        onBlur={blurNameHandler}
        className={isNameValid ? styles.input : `${styles.input} ${styles.error}`}
      />
      <label>{`${isEnglish ? "E-mail / Phone" : "E-mail / Telefon"}`}</label>
      <input
        type="text"
        name="contact"
        value={contact}
        onChange={changeContactHandler}
        onBlur={blurContactHandler}
        className={isContactValid ? styles.input : `${styles.input} ${styles.error}`}
      />
      <label>{`${isEnglish ? "Message" : "Wiadomość"}`}</label>
      <textarea
        name="msg"
        value={msg}
        onChange={changeMsgHandler}
        onBlur={blurMsgHandler}
        className={isMsgValid ? `${styles.msg} ${styles.input}` : `${styles.msg} ${styles.input} ${styles.error}`}
      />
      <div className={styles.btn}>
        {(!isNameValid || !isContactValid || !isMsgValid) && (
          <p className={styles.error}>
            <span>{text.contactPage.fillAllError}</span>
          </p>
        )}
        {isFormValid && !isSubmitting && !isLoad && <button>{text.contactPage.send}</button>}
        {isSubmitting && <Spinner />}
        <p>{isLoad && actionData?.ok && (isEnglish ? actionData?.msg : actionData?.pl)}</p>

        <p className={styles.error}>
          <span>{isLoad && !actionData.ok && (isEnglish ? actionData.msg : actionData?.pl)}</span>
        </p>
      </div>
      {user && <input name="token" readOnly hidden value={user.accessToken} />}
    </Form>
  );
};

export default ContactForm;
