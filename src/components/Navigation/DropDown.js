import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { uiActions } from "../../store/ui-slice";
import styles from "./DropDown.module.scss";

function DropDown() {
  const dispatch = useDispatch();
  const isEnglish = useSelector((state) => state.ui.isEnglish);

  const showDropDownHandler = () =>
    dispatch(uiActions.controlPortfolioDropDown("show"));
  const hideDropDownHandler = () =>
    dispatch(uiActions.controlPortfolioDropDown("hide"));

  return (
    <div
      className={styles.dropdown}
      onMouseOver={showDropDownHandler}
      onMouseLeave={hideDropDownHandler}
    >
      <ul>
        <li>
          <Link to="/portfolio/architecture">
            {isEnglish ? "Architecture" : "Architektura"}
          </Link>
        </li>
        <li>
          <Link to="/portfolio/photography">
            {isEnglish ? "Photography" : "Fotografia"}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default DropDown;
