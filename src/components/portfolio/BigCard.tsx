import styles from "./BigCard.module.scss";

type Props = {
  url: string;
  name?: string;
  text: string;
};

const BigCard: React.FC<Props> = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.url} alt={props.name} />
      <h1>{props.text}</h1>
    </div>
  );
};

export default BigCard;
