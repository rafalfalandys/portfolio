import NavItem from "./NavItem";
import styles from "./NavElements.module.scss";
import ToggleSwitch from "../UI/ToggleSwitch";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
// import { Link } from "react-router-dom";

function NavElements(props) {
  const dispatch = useDispatch();
  const isEnglish = useSelector((state) => state.ui.isEnglish);

  const mouseLeaveHandler = () => {
    dispatch(uiActions.controlPortfolioDropDown("hide"));
  };

  return (
    <ul className={styles.links} onMouseLeave={mouseLeaveHandler}>
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
      <ToggleSwitch homeEdition={props.homeEdition} />
    </ul>
  );
}

export default NavElements;
