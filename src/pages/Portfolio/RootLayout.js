import { Fragment } from "react";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
}

export default RootLayout;
