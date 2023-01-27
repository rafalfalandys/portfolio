import { useContext } from "react";
import Context from "../../store/context";
import styles from "./ProjectCard.module.scss";

function ProjectCard(props) {
  const ctx = useContext(Context);

  return (
    <div className={styles.card}>
      <img src={props.url} alt={props.title} />
      <div className={styles.text}>
        <h1>
          <span className={styles.keys}>
            {ctx.isEnglish ? "Location:" : "Lokalizacja:"}
          </span>
          <span>
            <strong>{props.location}</strong>
          </span>
        </h1>
        <h1>
          <span>{ctx.isEnglish ? "Area:" : "Strefa:"}</span>
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
