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
        <h2>
          {/* <span>{isEnglish ? "Area:" : "Strefa:"}</span> */}
          <span>
            <strong>{isEnglish ? title : tytul}</strong>
          </span>
        </h2>
        <h2>
          {/* <span className={styles.keys}>
            {isEnglish ? "Location:" : "Lokalizacja:"}
          </span> */}
          <span>
            <strong>{location}</strong>
          </span>
        </h2>
        <h2>
          {/* <span>{isEnglish ? "Year:" : "Rok:"}</span> */}
          <span>{year}</span>
        </h2>
        <p>{description}</p>
        <h3 className={styles.mobile}>{`${locationText} ${
          isEnglish ? title : tytul
        }`}</h3>
      </div>
    </div>
  );
}

export default ProjectCard;
