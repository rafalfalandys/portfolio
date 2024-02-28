import { PhoneIcon } from "@heroicons/react/24/solid";
import { textCommon } from "../../../assets/texts";
import styles from "./Contact.module.scss";

const Phone: React.FC<{ height?: string }> = (props) => {
  return (
    <div className={styles.contact} style={{ height: `${props.height}` }}>
      <PhoneIcon />
      <p>{textCommon.phone}</p>
    </div>
  );
};

export default Phone;
