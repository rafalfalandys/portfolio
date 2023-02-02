import { useContext, useEffect, useRef, useState } from "react";
import ContextProjects from "../../store/context-projects";
import ContextUI from "../../store/context-ui";
import styles from "./Filter.module.scss";

function Filter(props) {
  const [isChecked, setIsChecked] = useState(false);
  const filterRef = useRef();

  const { isEnglish } = useContext(ContextUI);
  const { filters, filtersHandler } = useContext(ContextProjects);

  const changeHandler = () => {
    filtersHandler(filterRef.current.value);
  };
  const labelLowerCase = props.label.toLowerCase();
  console.log(labelLowerCase);

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
