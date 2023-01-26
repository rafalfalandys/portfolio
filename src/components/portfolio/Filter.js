import { useContext, useEffect, useRef, useState } from "react";
import Context from "../../store/context";
import styles from "./Filter.module.scss";

function Filter(props) {
  const ctx = useContext(Context);
  const [isChecked, setIsChecked] = useState(false);
  const filterRef = useRef();

  const { filters, isEnglish } = ctx;

  const changeHandler = () => {
    ctx.filtersHandler(filterRef.current.value);
  };
  const labelLowerCase = props.label.toLowerCase();

  useEffect(() => {
    const checkIfChecked = () => {
      if (labelLowerCase === "all" && filters.length === 0) {
        setIsChecked(true);
        return;
      }
      if (labelLowerCase === "all" && filters.length !== 0) {
        setIsChecked(false);
        return;
      } else {
        setIsChecked(!!filters.find((el) => el === filterRef.current.value));
      }
    };
    checkIfChecked();
  }, [filters, labelLowerCase]);

  return (
    <div className={styles.filter}>
      <input
        type="checkbox"
        name={labelLowerCase}
        value={labelLowerCase}
        ref={filterRef}
        onChange={changeHandler}
        checked={isChecked}
      />
      <label>{`${isEnglish ? props.label : props.pl}`}</label>
    </div>
  );
}

export default Filter;
