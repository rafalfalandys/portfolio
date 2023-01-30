import NavItem from "./NavItem";
import styles from "./NavElements.module.scss";
import ToggleSwitch from "../UI/ToggleSwitch";
import { useContext } from "react";
import ContextUI from "../../store/context-ui";
// import { Link } from "react-router-dom";

function NavElements(props) {
  const { isEnglish } = useContext(ContextUI);

  return (
    <ul className={styles.links}>
      <NavItem mobile={props.mobile} linkTo="/about">
        {isEnglish ? "About" : "O mnie"}
      </NavItem>
      <NavItem mobile={props.mobile} linkTo="/portfolio" hover={props.hover}>
        Porfolio
      </NavItem>
      {/* {props.mobile && (
        <div className={styles.sublinks}>
        <Link to="/portfolio/architecture" className={styles.sublink}>
        Architecture
        </Link>
        <Link to="/portfolio/photography" className={styles.sublink}>
        Photography
        </Link>
        </div>
      )} */}
      <NavItem mobile={props.mobile} linkTo="/contact">
        {isEnglish ? "Contact" : "Kontakt"}
      </NavItem>
      <NavItem mobile={props.mobile} linkTo="/edit-panel">
        {isEnglish ? "Edit Panel" : "Panel Edycji"}
      </NavItem>
      <ToggleSwitch homeEdition={props.homeEdition} />
    </ul>
  );
}

export default NavElements;
