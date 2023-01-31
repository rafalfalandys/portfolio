import { Fragment, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import ContextProjects from "../../../store/context-projects";
import ContextUI from "../../../store/context-ui";
import styles from "./ProjectText.module.scss";

function ProjectText() {
  const { isEnglish, editMode } = useContext(ContextUI);
  const { curProject } = useContext(ContextProjects);
  const params = useParams();

  return (
    <div className={styles.text}>
      <h1>{`${curProject.location} - ${curProject.title}`}</h1>
      <p>
        {isEnglish && (
          <Fragment>
            <span>
              {`My role: ${curProject.role.map((role) => role).join(", ")}.`}
            </span>
            <br />
            <br />

            {curProject.tags.includes("work") && (
              <span>
                I was working on a project as en employee of Tillberg Design of
                Sweden.
                <br />
                <br />
              </span>
            )}
          </Fragment>
        )}

        {!isEnglish && (
          <Fragment>
            <span>
              {`Moja rola: ${curProject.role
                .map((role) => {
                  if (role === "designer") return "projektant";
                  if (role === "coordinator") return "koordynator";
                  else return role;
                })
                .join(", ")}.`}
            </span>
            <br />
            <br />
            {curProject.tags.includes("work") && (
              <span>
                Nad projektem pracowałem w okresie zatrudnienia w Tillberg
                Design of Sweden.
                <br />
                <br />
              </span>
            )}
          </Fragment>
        )}
        {isEnglish && <span>{curProject.description}</span>}
        {!isEnglish && (
          <span>
            {curProject.opis ? curProject.opis : curProject.description}
          </span>
        )}
      </p>
      {editMode && (
        <div className={styles["edit-link"]}>
          <Link to={`/edit-panel/${params.projectId}`}>Edit this project</Link>
        </div>
      )}
    </div>
  );
}

export default ProjectText;
