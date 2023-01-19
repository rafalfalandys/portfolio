import { useContext } from "react";
import Context from "../../../store/context";
import styles from "./ProjectText.module.scss";

function ProjectText() {
  const ctx = useContext(Context);

  const project = ctx.curProjects[ctx.curProject];

  return (
    <div className={styles.text}>
      <h1>{`${project.location} - ${project.title}`}</h1>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectText;
