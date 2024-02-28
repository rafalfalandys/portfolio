import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { textCommon } from "../../../assets/texts";
import styles from "./Contact.module.scss";

const Email: React.FC<{ height?: string }> = (props) => {
  return (
    <div className={styles.contact} style={{ height: `${props.height}` }}>
      <EnvelopeIcon />
      <p>{textCommon.email}</p>
    </div>
  );
};

export default Email;
