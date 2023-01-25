import { Fragment, useContext, useEffect } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { fetchAllProjects } from "../hooks/use-ajax";
import Context from "../store/context";

function RootLayout() {
  const loaderData = useLoaderData();
  const { allProjectsHandler, curProjectsHandler } = useContext(Context);
  useEffect(() => {
    allProjectsHandler(loaderData);
    curProjectsHandler(loaderData);
  }, [loaderData, allProjectsHandler, curProjectsHandler]);

  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
}

export default RootLayout;

export function loader() {
  return fetchAllProjects();
}
