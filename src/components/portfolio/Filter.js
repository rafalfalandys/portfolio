import { useContext, useEffect, useRef, useState } from "react";
import ContextProjects from "../../store/context-projects";
import styles from "./Filter.module.scss";

function Filter(props) {
  const [isChecked, setIsChecked] = useState(false);
  const filterRef = useRef();

  const { filters, filtersHandler } = useContext(ContextProjects);

  const changeHandler = () => {
    filtersHandler(filterRef.current.value);
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
      <label>{props.text}</label>
    </div>
  );
}

export default Filter;
