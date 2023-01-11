import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Context from "../../../store/context";
import styles from "./NavItem.module.scss";

function NavItem(props) {
  const ctx = useContext(Context);
  const clickHandler = () => ctx.hideNav();

  return (
    <li onClick={clickHandler}>
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
