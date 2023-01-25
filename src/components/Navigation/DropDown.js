import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../store/context";
import styles from "./DropDown.module.scss";

function DropDown() {
  const ctx = useContext(Context);
  return (
    <div
      className={styles.dropdown}
      onMouseOver={ctx.showDropDown}
      onMouseLeave={ctx.hideDropDown}
    >
      <ul>
        <li>
          <Link to="/architecture">
            {ctx.isEnglish ? "Architecture" : "Architektura"}
          </Link>
        </li>
        <li>
          <Link to="/photography">
            {ctx.isEnglish ? "Photography" : "Fotografia"}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default DropDown;
