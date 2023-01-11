import { useEffect, useState } from "react";
import useInput from "../hooks/use-input";
import styles from "./ContactForm.module.scss";
import Spinner from "./UI/Spinner";

function ContactForm() {
  const [isFormValid, setIsFormValid] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

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
    setIsFormValid(
      isEnteredNameValid && isEnteredContactValid && isEnteredMsgValid
    );
  }, [isEnteredNameValid, isEnteredContactValid, isEnteredMsgValid]);

  const submitHandler = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    setErrorMsg("");
    const uploadData = {
      name,
      contact,
      msg,
    };

    try {
      await fetch(
        "https://portfolio-f338a-default-rtdb.europe-west1.firebasedatabase.app/messages.jsson",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(uploadData),
        }
      );
    } catch (error) {
      setErrorMsg(`Something went wrong (${error})`);
      setTimeout(() => {
        setErrorMsg("");
        setIsLoading(false);
      }, 3000);
      return;
    }

    setIsLoading(false);
    setIsLoad(true);

    setTimeout(() => {
      setIsLoad(false);
    }, 3000);

    resetName();
    resetContact();
    resetMsg();
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label> Name</label>
      <input
        type="text"
        value={name}
        onChange={changeNameHandler}
        onBlur={blurNameHandler}
        className={
          isNameValid ? styles.input : `${styles.input} ${styles.error}`
        }
      />
      <label> E-mail / Phone</label>
      <input
        type="text"
        value={contact}
        onChange={changeContactHandler}
        onBlur={blurContactHandler}
        className={
          isContactValid ? styles.input : `${styles.input} ${styles.error}`
        }
      />
      <label> Message</label>
      <textarea
        type="text"
        value={msg}
        onChange={changeMsgHandler}
        onBlur={blurMsgHandler}
        className={
          isMsgValid
            ? `${styles.msg} ${styles.input}`
            : `${styles.msg} ${styles.input} ${styles.error}`
        }
      />
      <div className={styles.btn}>
        {!isNameValid && (
          <p className={styles.error}>
            <span>Please enter all data</span>
          </p>
        )}
        {isFormValid && !errorMsg && !isLoading && <button>Send</button>}
        {isLoading && !errorMsg && <Spinner />}
        {isLoad && <p>Message sent succesfully!</p>}
        {errorMsg && (
          <p className={styles.error}>
            <span>{errorMsg}</span>
          </p>
        )}
      </div>
    </form>
  );
}

export default ContactForm;
