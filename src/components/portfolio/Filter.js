import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { projectsActions } from "../../store/projects-slice";
import styles from "./Filter.module.scss";

function Filter(props) {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const filterRef = useRef();
  const { filters } = useSelector((state) => state.projects);

  const labelLowerCase = props.label.toLowerCase();
  const changeHandler = () => {
    console.log("change handler");
    dispatch(projectsActions.filterProjects(labelLowerCase));
  };

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
      <label>{props.label}</label>
    </div>
  );
}

export default Filter;
