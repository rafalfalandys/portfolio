import NavItem from "./NavItem";
import styles from "./NavElements.module.scss";

function NavElements(props) {
  return (
    <ul className={styles.links}>
      <NavItem mobile={props.mobile} linkTo="/about">
        About
      </NavItem>
      <NavItem mobile={props.mobile} linkTo="/portfolio" hover>
        Porfolio
      </NavItem>
      <NavItem mobile={props.mobile} linkTo="/contact">
        Contact
      </NavItem>
    </ul>
  );
}

export default NavElements;
