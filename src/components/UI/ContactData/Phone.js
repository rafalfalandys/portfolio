import { textCommon } from "../../../assets/texts";
import styles from "./Contact.module.scss";

import { Call } from "@swiftcarrot/react-ionicons";

function Phone(props) {
  return (
    <div className={styles.contact} style={{ height: `${props.height}` }}>
      <Call />
      <p>{textCommon.phone}</p>
    </div>
  );
}

export default Phone;
