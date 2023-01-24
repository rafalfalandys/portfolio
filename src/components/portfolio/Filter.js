import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Context from "../../store/context";
import { projectsActions } from "../../store/projects-slice";
import styles from "./Filter.module.scss";

function Filter(props) {
  const dispatch = useDispatch();
  const ctx = useContext(Context);
  const [isChecked, setIsChecked] = useState(false);
  const filterRef = useRef();
  const filters = useSelector((state) => state.projects.filters);
  const curProjects = useSelector((state) => state.projects.curProjects);

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
