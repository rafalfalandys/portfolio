import NavItem from "./NavItem";
import styles from "./NavElements.module.scss";

function NavElements() {
  return (
    <ul className={styles.links}>
      <NavItem linkTo="/about">About</NavItem>
      <NavItem linkTo="/portfolio">Porfolio</NavItem>
      <NavItem linkTo="/contact">Contact</NavItem>
    </ul>
  );
}

export default NavElements;
