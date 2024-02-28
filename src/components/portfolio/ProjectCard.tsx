import { useContext } from "react";
import ContextUI from "../../store/context-ui";
import styles from "./ProjectCard.module.scss";

type Props = {
  location: string;
  url: string;
  title: string;
  tytul: string;
  year: string;
  description: string;
  thumbnail?: string;
};

const ProjectCard: React.FC<Props> = ({ location, url, title, tytul, year, description, thumbnail }) => {
  const { isEnglish } = useContext(ContextUI);

  const locationText = location ? `${location} -` : "";

  return (
    <div className={styles.card}>
      <img src={thumbnail ? thumbnail : url} alt={title} />
      <div className={styles.text}>
        <h2>
          <span>
            <strong>{isEnglish ? title : tytul}</strong>
          </span>
        </h2>
        <h2>
          <span>
            <strong>{location}</strong>
          </span>
        </h2>
        <h2>
          <span>{year}</span>
        </h2>
        <p>{description}</p>
        <h3 className={styles.mobile}>{`${locationText} ${isEnglish ? title : tytul}`}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
