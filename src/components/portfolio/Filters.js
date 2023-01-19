import { Fragment, useEffect, useState } from "react";
import Filter from "./Filter";
import styles from "./Filters.module.scss";

function Filters(props) {
  const [isVisible, setIsVisible] = useState(false);
  const [filters, setFilters] = useState([]);

  const toggleFilterHandler = (filter) => {
    if (filter === "all") setFilters([]);
    else
      setFilters((prevState) => {
        const updatedFilters = prevState.slice(0);
        if (prevState.includes(filter)) {
          const filterIndex = prevState.indexOf(filter);
          updatedFilters.splice(filterIndex, 1);
        } else {
          updatedFilters.push(filter);
        }
        return updatedFilters;
      });
  };

  const { onFilter } = props;

  // I've used props instead of context only to train moving data a component up. I'd normally use context for filtering

  useEffect(() => {
    onFilter(filters);
  }, [filters, onFilter]);

  const toggleFiltersElHandler = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <Fragment>
      <div className={`${styles.filters} ${isVisible ? "" : styles.hidden}`}>
        <h1>Tags: </h1>
        <Filter
          label="All"
          toggleFilter={toggleFilterHandler}
          curFilters={filters}
        />
        <Filter
          label="Work"
          toggleFilter={toggleFilterHandler}
          curFilters={filters}
        />
        <Filter
          label="School"
          toggleFilter={toggleFilterHandler}
          curFilters={filters}
        />
        <Filter
          label="Bar"
          toggleFilter={toggleFilterHandler}
          curFilters={filters}
        />
        <Filter
          label="Outdoor"
          toggleFilter={toggleFilterHandler}
          curFilters={filters}
        />
        <Filter
          label="Algorithmic design"
          toggleFilter={toggleFilterHandler}
          curFilters={filters}
        />
      </div>
      <div className={styles.btn} onClick={toggleFiltersElHandler}>
        <span>{isVisible ? "Hide filters" : "Filters"}</span>
        <ion-icon name={`chevron-${isVisible ? "up" : "down"}`}></ion-icon>
      </div>
    </Fragment>
  );
}

export default Filters;
