import { Fragment, useContext, useEffect } from "react";
import Context from "../../store/context";
import Filter from "./Filter";
import styles from "./Filters.module.scss";

function Filters() {
  const ctx = useContext(Context);

  const { hideFilters, toggleFilters, curProject, isEnglish } = ctx;
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
        <Filter label="All" pl="Wszystko" />
        <Filter label="Work" pl="Praca" />
        <Filter label="School" pl="Szkoła" />
        <Filter label="Bar" pl="Bar" />
        <Filter label="Outdoor" pl="Pole" />
        <Filter label="Algorithmic design" pl="Projektowanie Algorytmiczne" />
      </div>
      <div className={styles.btn} onClick={toggleFiltersElHandler}>
        {isEnglish && (
          <span>{ctx.areFiltersVisible ? "Hide filters" : "Filters"}</span>
        )}
        {!isEnglish && (
          <span>{ctx.areFiltersVisible ? "Ukryj filtry" : "Filtry"}</span>
        )}
        <ion-icon
          name={`chevron-${ctx.areFiltersVisible ? "up" : "down"}`}
        ></ion-icon>
      </div>
    </Fragment>
  );
}

export default Filters;
