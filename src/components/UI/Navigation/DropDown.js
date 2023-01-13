import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../../store/context";
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
          <Link to="/portfolio/architecture">Architecture</Link>
        </li>
        <li>
          <Link to="/portfolio/photography">Photography</Link>
        </li>
      </ul>
    </div>
  );
}

export default DropDown;
