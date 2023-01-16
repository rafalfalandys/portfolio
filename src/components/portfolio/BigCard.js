import styles from "./BigCard.module.scss";

function BigCard(props) {
  return (
    <div className={styles.card}>
      <img src={props.url} alt={props.name} />
      <h1>{props.text}</h1>
    </div>
  );
}

export default BigCard;
