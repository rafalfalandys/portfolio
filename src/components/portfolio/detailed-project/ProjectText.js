import { Fragment } from "react";
import { useSelector } from "react-redux";
import styles from "./ProjectText.module.scss";

function ProjectText() {
  const { curProjects, curProject } = useSelector((state) => state.projects);
  const { isEnglish } = useSelector((state) => state.ui);

  const project = curProjects[curProject];

  return (
    <div className={styles.text}>
      <h1>{`${project.location} - ${project.title}`}</h1>
      <p>
        {isEnglish && (
          <Fragment>
            <span>
              {`My role: ${project.role.map((role) => role).join(", ")}.`}
            </span>
            <br />
            <br />

            {project.tags.includes("work") && (
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
              {`Moja rola: ${project.role
                .map((role) => {
                  if (role === "designer") return "projektant";
                  if (role === "coordinator") return "koordynator";
                  else return role;
                })
                .join(", ")}.`}
            </span>
            <br />
            <br />
            {project.tags.includes("work") && (
              <span>
                Nad projektem pracowałem w okresie zatrudnienia w Tillberg
                Design of Sweden.
                <br />
                <br />
              </span>
            )}
          </Fragment>
        )}
        {isEnglish && <span>{project.description}</span>}
        {!isEnglish && (
          <span>{project.opis ? project.opis : project.description}</span>
        )}
      </p>
    </div>
  );
}

export default ProjectText;
