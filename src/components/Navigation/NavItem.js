import { NavLink } from "react-router-dom";
import styles from "./NavItem.module.scss";
import "./NavItem";
import DropDown from "./DropDown";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

function NavItem(props) {
  const dispatch = useDispatch();
  const isPortfolioDropDownVisible = useSelector(
    (state) => state.ui.isPortfolioDropDownVisible
  );

  const clickHandler = () => {
    if (props.mobile) {
      return dispatch(uiActions.controlMobileNav("hide"));
    } else return;
  };

  const hoverHandler = () => {
    if (props.hover) dispatch(uiActions.controlPortfolioDropDown("show"));
  };

  return (
    <li className={styles.item} onClick={clickHandler}>
      <NavLink
        to={props.linkTo}
        onMouseOver={hoverHandler}
        className={(navData) =>
          navData.isActive ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        {props.children}
      </NavLink>
      {isPortfolioDropDownVisible && props.hover && !props.mobile && (
        <DropDown />
      )}
    </li>
  );
}

export default NavItem;
