import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProviderProjects from "./store/ProviderProjects";
import ProviderUI from "./store/ProviderUI";
import "./App.scss";

import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Contact, { action as sendMessage } from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/portfolio-pages/Portfolio";
import DetailedProject from "./pages/portfolio-pages/DetailedProject";
import { action as editProjects } from "./pages/edit-panel/architecture/EditArchitecturePanel";
import EditProjectForm from "./components/edit-panel/EditProjectForm";
import { lazy, Suspense } from "react";
import LoginPage, { action as signIn } from "./pages/LoginPage";
import EditArchitecturePanel from "./pages/edit-panel/architecture/EditArchitecturePanel";
import EditPhotographyPanel from "./pages/edit-panel/photography/EditPhotographyPanel";
import EditPage from "./pages/edit-panel/EditPage";
import { loadPhotos, updatePhotos } from "./api/api";

const Photography = lazy(() => import("./pages/portfolio-pages/Photography"));
const Architecture = lazy(() => import("./pages/portfolio-pages/Architecture"));

const projectsLoader = () =>
  import("./pages/portfolio-pages/Architecture").then((module) =>
    module.loader()
  );

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact />, action: sendMessage },
      { path: "portfolio", element: <Portfolio /> },
      {
        path: "photography",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Photography />
          </Suspense>
        ),
        loader: loadPhotos,
      },
      {
        path: "architecture",
        id: "architecture",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Architecture />
          </Suspense>
        ),
        loader: projectsLoader,
        children: [{ path: ":projectId", element: <DetailedProject /> }],
      },
      {
        path: "login",
        element: <LoginPage />,
        action: signIn,
      },
      {
        path: "edit",
        element: <EditPage />,
      },
      {
        path: "edit/architecture",
        element: <EditArchitecturePanel />,
        loader: projectsLoader,
        action: editProjects,
        children: [
          {
            path: ":projectId",
            element: <EditProjectForm />,
            loader: projectsLoader,
            action: editProjects,
          },
        ],
      },
      {
        path: "edit/photography",
        element: <EditPhotographyPanel />,
        loader: loadPhotos,
        action: updatePhotos,
      },
    ],
  },
]);

function App() {
  return (
    <ProviderUI>
      <ProviderProjects>
        <RouterProvider router={router} />
      </ProviderProjects>
    </ProviderUI>
  );
}

export default App;
