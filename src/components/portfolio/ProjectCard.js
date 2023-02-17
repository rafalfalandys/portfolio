import { useContext } from "react";
import ContextUI from "../../store/context-ui";
import styles from "./ProjectCard.module.scss";

function ProjectCard({
  location,
  url,
  title,
  tytul,
  year,
  description,
  thumbnail,
}) {
  const { isEnglish } = useContext(ContextUI);

  const locationText = location ? `${location} -` : "";

  return (
    <div className={styles.card}>
      <img
        src={thumbnail ? thumbnail : url}
        // src={url}
        alt={title}
      />
      <div className={styles.text}>
        <h1>
          {/* <span>{isEnglish ? "Area:" : "Strefa:"}</span> */}
          <span>
            <strong>{isEnglish ? title : tytul}</strong>
          </span>
        </h1>
        <h1>
          {/* <span className={styles.keys}>
            {isEnglish ? "Location:" : "Lokalizacja:"}
          </span> */}
          <span>
            <strong>{location}</strong>
          </span>
        </h1>
        <h1>
          {/* <span>{isEnglish ? "Year:" : "Rok:"}</span> */}
          <span>{year}</span>
        </h1>
        <p>{description}</p>
        <h2 className={styles.mobile}>{`${locationText} ${
          isEnglish ? title : tytul
        }`}</h2>
      </div>
    </div>
  );
}

export default ProjectCard;
