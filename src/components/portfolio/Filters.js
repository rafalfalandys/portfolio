import { Fragment, useContext, useEffect } from "react";
import Context from "../../store/context";
import Filter from "./Filter";
import styles from "./Filters.module.scss";

function Filters() {
  const ctx = useContext(Context);

  const { hideFilters, toggleFilters, curProject } = ctx;
  const toggleFiltersElHandler = () => toggleFilters();

  useEffect(() => {
    hideFilters();
  }, [curProject, hideFilters]);

  return (
    <Fragment>
      <div
        className={`${styles.filters} ${
          ctx.areFiltersVisible ? "" : styles.hidden
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
        <span>{ctx.areFiltersVisible ? "Hide filters" : "Filters"}</span>
        <ion-icon
          name={`chevron-${ctx.areFiltersVisible ? "up" : "down"}`}
        ></ion-icon>
      </div>
    </Fragment>
  );
}

export default Filters;
