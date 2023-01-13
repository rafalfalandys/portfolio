import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Context from "../../../store/context";
import styles from "./NavItem.module.scss";
import "./NavItem";
import DropDown from "./DropDown";

function NavItem(props) {
  const ctx = useContext(Context);

  const clickHandler = () => {
    if (props.mobile) {
      return ctx.hideNav();
    } else return;
  };

  const hoverHandler = () => {
    if (props.hover) ctx.showDropDown();
  };

  const leaveHandler = () => {
    if (props.hover) ctx.hideDropDown();
  };

  return (
    <li className={styles.item} onClick={clickHandler}>
      <NavLink
        to={props.linkTo}
        onMouseOver={hoverHandler}
        onMouseLeave={leaveHandler}
        className={(navData) =>
          navData.isActive ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        {props.children}
      </NavLink>
      {ctx.isDropDownVisible && props.hover && !props.mobile && <DropDown />}
    </li>
  );
}

export default NavItem;
