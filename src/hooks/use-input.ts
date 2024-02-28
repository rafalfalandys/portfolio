import { ChangeEvent, useState } from "react";

function useInput() {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValueValid = !!value;

  const isAllValid = isValueValid || !isTouched;

  const onChangeHandler = (e: ChangeEvent) => setValue((e.target as HTMLInputElement).value);

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
