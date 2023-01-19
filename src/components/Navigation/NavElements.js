import NavItem from "./NavItem";
import styles from "./NavElements.module.scss";
import ToggleSwitch from "../UI/ToggleSwitch";
import { useContext } from "react";
import Context from "../../store/context";
// import { Link } from "react-router-dom";

function NavElements(props) {
  const ctx = useContext(Context);
  return (
    <ul className={styles.links}>
      <NavItem mobile={props.mobile} linkTo="/about">
        {ctx.isEnglish ? "About" : "O mnie"}
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
        {ctx.isEnglish ? "Contact" : "Kontakt"}
      </NavItem>
      <ToggleSwitch homeEdition={props.homeEdition} />
    </ul>
  );
}

export default NavElements;
