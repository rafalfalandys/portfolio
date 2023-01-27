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
import Photography from "./pages/portfolio-pages/Photography";
import Architecture, {
  loader as projectsLoader,
} from "./pages/portfolio-pages/Architecture";
import DetailedProject from "./pages/portfolio-pages/DetailedProject";

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
      { path: "photography", element: <Photography /> },
      {
        path: "architecture",
        id: "architecture",
        element: <Architecture />,
        loader: projectsLoader,
        children: [{ path: ":projectId", element: <DetailedProject /> }],
      },
    ],
  },
]);

function App() {
  return (
    <ProviderUI>
      <ProviderProjects>
        {/* <Provider> */}
        <RouterProvider router={router} />
        {/* </Provider> */}
      </ProviderProjects>
    </ProviderUI>
  );
}

export default App;
