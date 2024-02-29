import NavItem from "./NavItem";
import styles from "./NavElements.module.scss";
import ToggleSwitch from "../UI/ToggleSwitch";
import { useContext } from "react";
import ContextUI from "../../store/context-ui";
import useText from "../../hooks/use-text";

type Props = {
  mobile?: boolean;
  hover?: boolean;
  homeEdition?: boolean;
};

const NavElements: React.FC<Props> = (props) => {
  const { editMode } = useContext(ContextUI);
  const text = useText();

  return (
    <ul className={styles.links}>
      <NavItem mobile={props.mobile} linkTo="/about">
        {text.nav.about}
      </NavItem>
      <NavItem mobile={props.mobile} linkTo="/portfolio" hover={props.hover}>
        Porfolio
      </NavItem>
      <NavItem mobile={props.mobile} linkTo="/contact">
        {text.nav.contact}
      </NavItem>
      {editMode && (
        <NavItem mobile={props.mobile} linkTo={"/edit"}>
          {text.nav.edit}
        </NavItem>
      )}
      <ToggleSwitch homeEdition={props.homeEdition || false} />
    </ul>
  );
};

export default NavElements;
