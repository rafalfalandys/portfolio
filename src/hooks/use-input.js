import { useState } from "react";

function useInput() {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValueValid = !!value;

  let isAllValid = isValueValid || !isTouched;

  const onChangeHandler = (e) => setValue(e.target.value);

  const onblurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setValue("");
    setIsTouched(false);
  };

  return {
    value,
    isValueValid,
    isAllValid,
    onChangeHandler,
    onblurHandler,
    reset,
  };
}

export default useInput;
