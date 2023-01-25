import { Fragment, useContext } from "react";
import Context from "../../../store/context";
import styles from "./ProjectText.module.scss";

function ProjectText() {
  const ctx = useContext(Context);
  const { curProject, curProjects } = ctx;

  if (curProjects.length === 0 || curProject === -1) return;

  // need to stop here because react renders this components before useEffects set the context
  const project = curProjects[curProject];

  return (
    <div className={styles.text}>
      <h1>{`${project.location} - ${project.title}`}</h1>
      <p>
        {ctx.isEnglish && (
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

        {!ctx.isEnglish && (
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
        {ctx.isEnglish && <span>{project.description}</span>}
        {!ctx.isEnglish && (
          <span>{project.opis ? project.opis : project.description}</span>
        )}
      </p>
    </div>
  );
}

export default ProjectText;
