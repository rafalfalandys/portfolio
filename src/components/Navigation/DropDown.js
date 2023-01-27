import { useContext } from "react";
import { Link } from "react-router-dom";
import ContextUI from "../../store/context-ui";
import styles from "./DropDown.module.scss";

function DropDown() {
  const { showDropDown, hideDropDown, isEnglish } = useContext(ContextUI);
  return (
    <div
      className={styles.dropdown}
      onMouseOver={showDropDown}
      onMouseLeave={hideDropDown}
    >
      <ul>
        <li>
          <Link to="/architecture">
            {isEnglish ? "Architecture" : "Architektura"}
          </Link>
        </li>
        <li>
          <Link to="/photography">
            {isEnglish ? "Photography" : "Fotografia"}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default DropDown;
