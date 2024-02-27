import { useContext } from "react";
import { Link } from "react-router-dom";
import ContextUI from "../../store/context-ui";
import styles from "./DropDown.module.scss";
import useText from "../../hooks/use-text";

function DropDown() {
  const { showDropDown, hideDropDown } = useContext(ContextUI);
  const text = useText();

  return (
    <div
      className={styles.dropdown}
      onMouseOver={showDropDown}
      onMouseLeave={hideDropDown}
    >
      <ul>
        <li>
          <Link to="/architecture">{text.portfolioPage.architecture}</Link>
        </li>
        <li>
          <Link to="/photography">{text.portfolioPage.photography}</Link>
        </li>
      </ul>
    </div>
  );
}

export default DropDown;
