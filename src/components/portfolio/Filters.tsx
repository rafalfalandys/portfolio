import { useRef } from "react";
import { useContext, useEffect } from "react";
import ContextProjects from "../../store/context-projects";
import ContextUI from "../../store/context-ui";
import Filter from "./Filter";
import styles from "./Filters.module.scss";
import useText from "../../hooks/use-text";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const Filters = () => {
  const { areFiltersVisible, hideFilters, toggleFilters } = useContext(ContextUI);
  const { curProject, sortingHandler, sorting } = useContext(ContextProjects);
  const sortRef = useRef<HTMLSelectElement>(null);
  const text = useText();

  const toggleFiltersElHandler = () => toggleFilters();
  const onSortHandler = () => sortingHandler(sortRef.current!.value);
  useEffect(() => {
    hideFilters();
  }, [curProject, hideFilters]);

  return (
    <>
      <div className={`${styles.filters} ${areFiltersVisible ? "" : styles.hidden}`}>
        <h1>{text.filters.tags}: </h1>
        <Filter label="All" text={text.filters.all} />
        <Filter label="Work" text={text.filters.work} />
        <Filter label="Studies" text={text.filters.studies} />
        <Filter label="Bar" text={text.filters.bar} />
        <Filter label="Outdoor" text={text.filters.outdoor} />
        <Filter label="Urban planning" text={text.filters.urbanPlanning} />
        <Filter label="Algorithmic design" text={text.filters.algorithmicDesign} />
        <div className={styles.sorting}>
          {/* <label>Sorting: </label> */}
          <select defaultValue={sorting} onChange={onSortHandler} ref={sortRef}>
            <option value="defaut">{text.filters.defaultOrder}</option>
            <option value="year">{text.filters.newFirst}</option>
            <option value="year-reverse">{text.filters.oldFirst}</option>
          </select>
        </div>
      </div>
      <div className={styles.btn} onClick={toggleFiltersElHandler}>
        <span>{areFiltersVisible ? text.filters.hideFilters : text.filters.showFilters}</span>
        {areFiltersVisible ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </div>
    </>
  );
};

export default Filters;
