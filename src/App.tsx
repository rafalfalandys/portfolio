import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProviderProjects from "./store/ProviderProjects";
import ProviderUI from "./store/ProviderUI";
import "./App.scss";

import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/portfolio-pages/Portfolio";
import DetailedProject from "./pages/portfolio-pages/DetailedProject";
import EditProjectForm from "./components/edit-panel/EditProjectForm";
import EditArchitecturePanel from "./pages/edit-panel/architecture/EditArchitecturePanel";
import EditPhotographyPanel from "./pages/edit-panel/photography/EditPhotographyPanel";
import EditPage from "./pages/edit-panel/EditPage";
import { loadProjects, loadPhotos, updatePhotos, sendMessage, updateAllProjects } from "./api/api";
import Photography from "./pages/portfolio-pages/Photography";
import Architecture from "./pages/portfolio-pages/Architecture";

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
        element: <Photography />,
        loader: loadPhotos,
      },
      {
        path: "architecture",
        id: "architecture",
        element: <Architecture />,
        loader: loadProjects,
        children: [{ path: ":projectId", element: <DetailedProject /> }],
      },
      {
        path: "edit",
        element: <EditPage />,
      },
      {
        path: "edit/architecture",
        element: <EditArchitecturePanel />,
        loader: loadProjects,
        action: updateAllProjects,
        children: [
          {
            path: ":projectId",
            element: <EditProjectForm />,
            loader: loadProjects,
            action: updateAllProjects,
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
