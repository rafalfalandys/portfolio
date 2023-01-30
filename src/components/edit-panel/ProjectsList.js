import { useState } from "react";
import { useLoaderData, useSubmit } from "react-router-dom";
import styles from "./ProjectsList.module.scss";

function ProjectsList({ showFormHandler }) {
  const loaderData = useLoaderData();
  const [projectsList, setProjectsList] = useState(loaderData);
  const [isOrderChanged, setIsOrderChanged] = useState(true);
  const submit = useSubmit();

  const slideHandler = (i, isRight) => {
    setIsOrderChanged(true);
    setProjectsList((prev) => {
      // checking extremes first
      return i === (isRight ? prev.length - 1 : 0)
        ? prev.map((_, index) => {
            if (isRight) {
              return index === 0 ? prev[prev.length - 1] : prev[index - 1];
            } else {
              return index === prev.length - 1 ? prev[0] : prev[index + 1];
            }
          })
        : // normal cases now
          prev.map((project, index) => {
            if (index === i) return prev[i + (isRight ? 1 : -1)];
            if (index === i + (isRight ? 1 : -1)) return prev[i];
            else return project;
          });
    });
  };

  const confirmHandler = () => {
    submit({ projects: JSON.stringify(projectsList) }, { method: "patch" });
  };

  const projects = projectsList.map((project, i) => {
    return (
      <div className={styles.project} key={project.id}>
        <div
          className={`${styles.left} ${styles.icon}`}
          onClick={slideHandler.bind(null, i, false)} // false stands for !isRight
        >
          <ion-icon name="chevron-back-outline"></ion-icon>
        </div>
        <p onClick={showFormHandler.bind(null, project)}>{project.title}</p>
        <div
          className={`${styles.right} ${styles.icon}`}
          onClick={slideHandler.bind(null, i, true)} // false stands for isRight
        >
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.projects}>
      {projects}
      <div className={styles["add-project"]}>
        <ion-icon name="add-circle-outline" size="large"></ion-icon>
      </div>
      {isOrderChanged && (
        <div className={styles.confirm} onClick={confirmHandler}>
          Confirm changes
        </div>
      )}
    </div>
  );
}

export default ProjectsList;

//   if (isRight) {
//     return i === prev.length - 1
//       ? prev.map((_, index) => {
//           return index === 0 ? prev[prev.length - 1] : prev[index - 1];
//         })
//       : prev.map((project, index) => {
//           if (index === i) return prev[i + 1];
//           if (index === i + 1) return prev[i];
//           else return project;
//         });
//   } else {
//     return i === 0
//       ? prev.map((_, index) => {
//           return index === prev.length - 1 ? prev[0] : prev[index + 1];
//         })
//       : prev.map((project, index) => {
//           if (index === i) return prev[i - 1];
//           if (index === i - 1) return prev[i];
//           else return project;
//         });
//   }
