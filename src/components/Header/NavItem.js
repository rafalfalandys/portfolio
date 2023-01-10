import { NavLink } from "react-router-dom";
import styles from "./NavItem.module.scss";

function NavItem(props) {
  // const linkClass = `${styles.link} ${(navData) =>
  //   navData.isActive ? styles.active : ""}`;
  return (
    <li>
      <NavLink
        to={props.linkTo}
        className={(navData) =>
          navData.isActive ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        {props.children}
      </NavLink>
    </li>
  );
}

export default NavItem;
