import styles from "./ProjectCard.module.scss";

function ProjectCard(props) {
  return (
    <div className={styles.card}>
      <img src={props.url} alt={props.title} />
      <div className={styles.text}>
        <h1>
          <span className={styles.keys}>Location:</span>
          <span>
            <strong>{props.location}</strong>
          </span>
        </h1>
        <h1>
          <span>Area:</span>
          <span>
            <strong>{props.title}</strong>
          </span>
        </h1>
        <p>{props.description}</p>
        <h2
          className={styles.mobile}
        >{`${props.location} - ${props.title}`}</h2>
      </div>
    </div>
  );
}

export default ProjectCard;
