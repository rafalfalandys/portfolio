import { Fragment, useContext } from "react";
import styles from "./Architecture.module.scss";
import Footer from "../../components/UI/Footer";
import Header from "../../components/Header/Header";
import SingleItem from "../../components/portfolio/SingleItem";
import Context from "../../store/context";
import { Link } from "react-router-dom";

function Architecture() {
  const ctx = useContext(Context);

  const projects = ctx.projectsData.map((project, i) => {
    return (
      <div key={project.title}>
        <h1>{project.title}</h1>
        <Link to={project.id}>
          <SingleItem url={project.images[0].url} />
        </Link>
      </div>
    );
    // <SingleItem url={photo.url} name={photo.img} key={photo.img} no={i} />
  });

  return (
    <Fragment>
      <Header />
      <main className={styles.tiles}>{projects}</main>
      <Footer fixed />
    </Fragment>
  );
}
export default Architecture;
