import styles from "./Contact.module.scss";

import { Mail } from "@swiftcarrot/react-ionicons";

function Email(props) {
  return (
    <div className={styles.contact} style={{ height: `${props.height}` }}>
      <Mail />
      <p>rafalfalandys@gmail.com</p>
    </div>
  );
}

export default Email;
