import { Fragment, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import ContextProjects from "../../../store/context-projects";
import ContextUI from "../../../store/context-ui";
import styles from "./ProjectText.module.scss";
import useText from "../../../hooks/use-text";

const ProjectText = () => {
  const { isEnglish, editMode } = useContext(ContextUI);
  const { curProject } = useContext(ContextProjects);
  const params = useParams();
  const text = useText();

  const locationText = curProject.location ? `${curProject.location} -` : "";

  const noTDText = curProject.tags.includes("no td text");

  return (
    <div className={styles.text}>
      <h1>{`${locationText} ${isEnglish ? curProject.title : curProject.tytul}`}</h1>
      <p>
        {isEnglish && (
          <Fragment>
            {curProject.role[0] !== "" && (
              <Fragment>
                <span>{`My role: ${curProject.role.map((role) => role).join(", ")}.`}</span>
                <br />
                <br />
              </Fragment>
            )}

            {!noTDText && curProject.tags.includes("work") && (
              <span>
                {text.projText.tdClause}
                <br />
                <br />
              </span>
            )}
          </Fragment>
        )}

        {!isEnglish && (
          <Fragment>
            {curProject.role[0] !== "" && (
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
              </Fragment>
            )}

            {!noTDText && curProject.tags.includes("work") && (
              <span>
                {text.projText.tdClause}
                <br />
                <br />
              </span>
            )}
          </Fragment>
        )}
        {isEnglish && <span>{curProject.description}</span>}
        {!isEnglish && <span>{curProject.opis ? curProject.opis : curProject.description}</span>}
      </p>
      {editMode && (
        <div className={styles["edit-link"]}>
          <Link to={`/edit/architecture/${params.projectId}`}>Edit this project</Link>
        </div>
      )}
    </div>
  );
};

export default ProjectText;
