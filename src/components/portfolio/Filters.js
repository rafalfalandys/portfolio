import { useRef } from "react";
import { Fragment, useContext, useEffect } from "react";
import ContextProjects from "../../store/context-projects";
import ContextUI from "../../store/context-ui";
import Filter from "./Filter";
import styles from "./Filters.module.scss";

function Filters() {
  const { areFiltersVisible, hideFilters, toggleFilters, isEnglish } =
    useContext(ContextUI);
  const { curProject, sortingHandler } = useContext(ContextProjects);
  const sortRef = useRef();

  const toggleFiltersElHandler = () => toggleFilters();
  const onSortHandler = () => sortingHandler(sortRef.current.value);
  useEffect(() => {
    hideFilters();
  }, [curProject, hideFilters]);

  return (
    <Fragment>
      <div
        className={`${styles.filters} ${
          areFiltersVisible ? "" : styles.hidden
        }`}
      >
        <h1>{isEnglish ? "Tags" : "Tagi"}: </h1>
        <Filter label="All" pl="Wszystko" />
        <Filter label="Work" pl="Praca" />
        <Filter label="School" pl="Szkoła" />
        <Filter label="Bar" pl="Bar" />
        <Filter label="Outdoor" pl="Pole" />
        <Filter label="Algorithmic design" pl="Projektowanie Algorytmiczne" />
        <div className={styles.sorting}>
          {/* <label>Sorting: </label> */}
          <select defaultValue="default" onChange={onSortHandler} ref={sortRef}>
            <option value="defaut">
              {isEnglish ? "Default order" : "Domyślna kolejność"}
            </option>
            <option value="year">
              {isEnglish ? "Newest first" : "Od najnowszych"}
            </option>
            <option value="year-reverse">
              {isEnglish ? "Oldest first" : "Od najstarych"}
            </option>
          </select>
        </div>
      </div>
      <div className={styles.btn} onClick={toggleFiltersElHandler}>
        {isEnglish && (
          <span>{areFiltersVisible ? "Hide filters" : "Filters"}</span>
        )}
        {!isEnglish && (
          <span>{areFiltersVisible ? "Ukryj filtry" : "Filtry"}</span>
        )}
        <ion-icon
          name={`chevron-${areFiltersVisible ? "up" : "down"}`}
        ></ion-icon>
      </div>
    </Fragment>
  );
}

export default Filters;
