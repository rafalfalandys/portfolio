import styles from "./Contact.module.scss";

import { Call } from "@swiftcarrot/react-ionicons";

function Phone(props) {
  return (
    <div className={styles.contact} style={{ height: `${props.height}` }}>
      <Call />
      <p>+48 736 250 545</p>
    </div>
  );
}

export default Phone;
