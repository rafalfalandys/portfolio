import NavItem from "./NavItem";
import styles from "./NavElements.module.scss";
import { Link } from "react-router-dom";

function NavElements(props) {
  return (
    <ul className={styles.links}>
      <NavItem mobile={props.mobile} linkTo="/about">
        About
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
        Contact
      </NavItem>
    </ul>
  );
}

export default NavElements;
