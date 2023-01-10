import styles from "./ContactData.module.scss";

import { Call, Mail } from "@swiftcarrot/react-ionicons";

function ContactData(props) {
  return (
    <div className={styles.contact} style={{ height: `${props.height}` }}>
      <Call />
      <p>+48 736 250 545</p>
      <Mail />
      <p>rafalfalandys@gmail.com</p>
    </div>
  );
}

export default ContactData;
