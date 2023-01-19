import { useRef } from "react";
import styles from "./Filter.module.scss";

function Filter(props) {
  const filterRef = useRef();

  const changeHandler = () => {
    props.toggleFilter(filterRef.current.value);
  };

  const labelLowerCase = props.label.toLowerCase();

  const checkIfChecked = () => {
    if (labelLowerCase === "all" && props.curFilters.length === 0) return true;
    if (labelLowerCase === "all" && props.curFilters.length !== 0) return false;
    else {
      return !!props.curFilters.find((el) => el === filterRef.current.value);
    }
  };

  const isChecked = checkIfChecked();

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
      <label>{props.label}</label>
    </div>
  );
}

export default Filter;
