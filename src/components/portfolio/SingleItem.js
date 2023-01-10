import styles from "./SingleItem.module.scss";

function SingleItem(props) {
  return (
    <div className={styles.container}>
      <img src={require(`../../img/photos/${props.name}`)} />
    </div>
  );
}

export default SingleItem;
