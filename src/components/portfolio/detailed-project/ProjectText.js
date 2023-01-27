import { Fragment, useContext } from "react";
import Context from "../../../store/context";
import styles from "./ProjectText.module.scss";

function ProjectText() {
  const { curProject, isEnglish } = useContext(Context);

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
    </div>
  );
}

export default ProjectText;
