import { Fragment, useContext, useEffect } from "react";
import styles from "./Architecture.module.scss";
import Footer from "../../components/UI/Footer";
import Header from "../../components/Header/Header";
import SingleItem from "../../components/portfolio/SingleItem";
import Context from "../../store/context";
import { Link } from "react-router-dom";

function Architecture() {
  const ctx = useContext(Context);
  useEffect(() => {
    ctx.curImgHandler(0);
  }, [ctx]);

  const projects = ctx.projectsData.map((project, i) => (
    <Link to={project.id} className={styles.tile} key={project.id}>
      <SingleItem
        url={project.images[0].url}
        name={project.title}
        style={{ transform: "scale(1)" }}
      />
      <div className={styles.text}>
        <h1>
          <span className={styles.keys}>Location:</span>
          <span>
            <strong>{project.location}</strong>
          </span>
        </h1>
        <h1>
          <span className={styles.keys}>Area:</span>
          <span>
            <strong>{project.title}</strong>
          </span>
        </h1>
        <p>{project.description}</p>
        <h2
          className={styles.mobile}
        >{`${project.location} - ${project.title}`}</h2>
      </div>
    </Link>
  ));

  return (
    <Fragment>
      <Header />
      <main className={styles.main}>
        <div className={styles.tiles}>{projects}</div>
      </main>
      <Footer />
    </Fragment>
  );
}
export default Architecture;
