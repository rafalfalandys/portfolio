import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import Filter from "./Filter";
import styles from "./Filters.module.scss";

function Filters() {
  const dispatch = useDispatch();
  const { curProject } = useSelector((state) => state.projects);
  const { isFiltersBarVisible } = useSelector((state) => state.ui);

  const toggleFiltersElHandler = () =>
    dispatch(uiActions.controlFiltersBar("toggle"));

  useEffect(() => {
    dispatch(uiActions.controlFiltersBar("hide"));
  }, [curProject, dispatch]);

  return (
    <Fragment>
      <div
        className={`${styles.filters} ${
          isFiltersBarVisible ? "" : styles.hidden
        }`}
      >
        <h1>Tags: </h1>
        <Filter label="All" />
        <Filter label="Work" />
        <Filter label="School" />
        <Filter label="Bar" />
        <Filter label="Outdoor" />
        <Filter label="Algorithmic design" />
      </div>
      <div className={styles.btn} onClick={toggleFiltersElHandler}>
        <span>{isFiltersBarVisible ? "Hide filters" : "Filters"}</span>
        <ion-icon
          name={`chevron-${isFiltersBarVisible ? "up" : "down"}`}
        ></ion-icon>
      </div>
    </Fragment>
  );
}

export default Filters;
